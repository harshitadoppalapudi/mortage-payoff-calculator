import React, { useState } from 'react';

export default function ChatAssistant({ onAsk }: { onAsk: (q: string) => string }) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    const res = onAsk(question);
    setResponse(res);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <input
        placeholder="Ask me something..."
        style={{ width: '100%', padding: 10 }}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAsk} style={{ marginTop: 10, padding: 10, background: '#4CAF50', color: 'white' }}>
        Ask
      </button>
      {response && <p style={{ marginTop: 10, background: '#f1f1f1', padding: 10 }}>{response}</p>}
    </div>
  );
}
