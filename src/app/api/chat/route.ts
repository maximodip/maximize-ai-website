import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index("agentemaximodip");

async function getRelevantContext(query: string): Promise<string> {
  try {
    // Generar embedding de la consulta (512 dimensiones para coincidir con Pinecone)
    const embeddingResponse = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
      dimensions: 512,
    });

    const queryEmbedding = embeddingResponse.data[0].embedding;

    // Buscar en Pinecone
    const searchResponse = await index.query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
    });

    // Extraer contexto relevante con threshold balanceado
    const contexts =
      searchResponse.matches
        ?.filter((match) => match.score && match.score > 0.3)
        .map((match) => {
          // Debug log para ver la estructura
          console.log(
            "Match metadata:",
            JSON.stringify(match.metadata, null, 2)
          );
          console.log("Match score:", match.score);

          // Intentar diferentes formas de acceder al texto
          const metadata = match.metadata as any;
          return metadata?.text || metadata?.content || metadata?.chunk || "";
        })
        .filter((text) => typeof text === "string" && text.length > 0) || [];

    // Debug final
    console.log("Final contexts array:", contexts);
    console.log("Contexts length:", contexts.length);
    console.log("Joined context:", contexts.join("\n\n"));

    return contexts.join("\n\n");
  } catch (error) {
    console.error("Error al buscar en Pinecone:", error);
    return "";
  }
}

const getSystemPrompt = (context: string) => {
  if (!context || context.trim().length === 0) {
    return `Soy el asistente de Máximo Dip. No tengo información específica sobre esa consulta. Para obtener detalles precisos, contacta directamente:
- Email: maximodipaparicio@gmail.com
- WhatsApp: +5493814057449
- LinkedIn: linkedin.com/in/maximodipaparicio`;
  }

  return `Soy el asistente de Máximo Dip. Responderé usando ÚNICAMENTE el siguiente texto:

TEXTO ESPECÍFICO:
"${context}"

INSTRUCCIONES CRÍTICAS:
- Tu respuesta debe basarse SOLO en el texto específico de arriba
- NO uses conocimiento general sobre privacidad, políticas o cualquier tema
- Cita textualmente o parafrasea únicamente lo que dice el texto específico
- Si el usuario pregunta algo que no está en el texto específico, di "No tengo esa información específica"
- Ejemplo: Si el texto dice "X política establece Y", responde exactamente eso, no agregues información general sobre políticas

Contacto para más información: maximodipaparicio@gmail.com, WhatsApp: +5493814057449`;
};

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Mensajes no válidos" },
        { status: 400 }
      );
    }

    // Obtener el último mensaje del usuario para buscar contexto relevante
    const lastUserMessage = messages.filter((m) => m.role === "user").pop();
    const userQuery = lastUserMessage?.content || "";

    // Buscar contexto relevante en Pinecone
    const relevantContext = await getRelevantContext(userQuery);

    // Debug logging (remover en producción)
    console.log("User query:", userQuery);
    console.log("Context found:", relevantContext ? "YES" : "NO");
    console.log("Context length:", relevantContext.length);
    console.log("Full context being sent to model:", relevantContext);
    console.log(
      "System prompt preview:",
      getSystemPrompt(relevantContext).substring(0, 500) + "..."
    );

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: getSystemPrompt(relevantContext) },
        ...messages,
      ],
      max_tokens: 200,
      temperature: 0.0,
      top_p: 0.1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    const message =
      completion.choices[0]?.message?.content ||
      "Lo siento, no pude generar una respuesta. Por favor contacta directamente a maximodipaparicio@gmail.com";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Error en API de chat:", error);
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        message:
          "Lo siento, ocurrió un error. Por favor intenta de nuevo o contacta directamente a maximodipaparicio@gmail.com",
      },
      { status: 500 }
    );
  }
}
