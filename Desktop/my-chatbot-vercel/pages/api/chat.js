// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Dozvoljene su samo POST metode.' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const userMessage = req.body.message;

  if (!apiKey) {
    return res.status(500).json({ error: 'API ključ nije podešen.' });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      }),
    });
    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Greška prilikom komunikacije sa OpenAI API.' });
  }
}
