import express from "express";
import { OpenAI } from "openai";

const app = express();
app.use(express.json());

// CORS für GitHub Pages freigeben
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://firestream999.github.io"); // GitHub Pages Domain
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Hugging Face Router über OpenAI-Client
const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_TOKEN, // Hugging Face Token als Env-Variable setzen!
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatCompletion = await client.chat.completions.create({
      model: "deepseek-ai/DeepSeek-V3.2:novita", // Modellname im Router-Format
      messages: [
        {
          role: "system",
          content: "Du bist eine hilfreiche KI, die Fragen zu allen Themen beantworten kann. Sei präzise, freundlich und hilfsbereit."
        },
        { role: "user", content: userMessage }
      ],
    });

    const reply = chatCompletion.choices?.[0]?.message?.content || "Keine Antwort erhalten.";
    res.json({ reply });
  } catch (err) {
    console.error("Backend Error:", err);
    res.status(500).json({ reply: "Serverfehler: " + err.message });
  }
});

app.listen(3000, () => console.log("Server läuft auf Port 3000"));
