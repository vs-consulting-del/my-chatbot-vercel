import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function askOpenAI(message: string) {
  const chat = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "Ti si pravni asistent tima VS Legal. Tvoja uloga je da pomažeš advokatima u snalaženju kroz pravne propise Republike Srbije. Odgovaraj profesionalno, precizno i jasno. Ako nemaš dovoljno informacija, reci da trenutno ne možeš da pomogneš. Uvek se predstavljaj kao “naš VS Legal pravni asistent”."
      },
      {
        role: "user",
        content: message
      }
    ]
  });
  return chat.choices[0]?.message?.content || "⚠️ Trenutno nismo u mogućnosti da obradimo zahtev.";
}
