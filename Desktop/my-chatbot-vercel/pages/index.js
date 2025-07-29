// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    setResponse('Čekam odgovor...');
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.reply || 'Greška prilikom dobijanja odgovora.');
  };

  return (
    <div className="container">
      <h1>VS Legal Pravni Asistent</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Unesite pitanje..."
      />
      <button onClick={sendMessage}>Pošalji</button>
      <p>{response}</p>
    </div>
  );
}
