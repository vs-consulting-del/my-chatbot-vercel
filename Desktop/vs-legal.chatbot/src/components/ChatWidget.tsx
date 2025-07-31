'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, "👤: " + input];
    setMessages(newMessages);
    setInput('');

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    setMessages([...newMessages, "⚖️ VS Legal: " + data.reply]);
  };

  return (
    <div className="fixed bottom-6 right-6 bg-white border shadow-xl rounded-xl w-80 p-4">
      <div className="font-semibold mb-2">💬 VS Legal pravni asistent</div>
      <div className="space-y-2 h-48 overflow-y-auto text-sm">
        {messages.map((m, i) => <div key={i}>{m}</div>)}
      </div>
      <div className="flex mt-2">
        <input className="flex-grow border px-2 py-1 text-sm" value={input} onChange={e => setInput(e.target.value)} />
        <button className="ml-2 px-3 py-1 bg-black text-white text-sm rounded" onClick={sendMessage}>Pošalji</button>
      </div>
    </div>
  );
}
