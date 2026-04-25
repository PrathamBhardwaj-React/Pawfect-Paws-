import { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import './Chatbot.css';

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const SYSTEM_INSTRUCTION = `You are Pawfect, a friendly AI pet assistant.
Answer in 2-4 sentences. Suggest vet for serious issues. Do not diagnose.`;

const ALL_SUGGESTIONS = [
  'My dog is not eating, what should I do?',
  'How often should I vaccinate my cat?',
  'What are signs of a sick pet?',
  'Best diet for a senior dog?',
  'My cat is vomiting — is it serious?',
  'How to deworm my puppy?',
  'Why is my dog scratching so much?',
  'Safe human foods for dogs?',
];

const getRandomSuggestions = (n = 4) =>
  [...ALL_SUGGESTIONS].sort(() => 0.5 - Math.random()).slice(0, n);

export default function PawfectChatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Pawfect 🐾 Ask me anything!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(getRandomSuggestions());
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // ✅ Gemini SDK call
  const fetchReply = async (chatHistory) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          ...chatHistory,
        ],
      });

      return response.text || "Sorry, I couldn't respond.";
    } catch (err) {
      console.error(err);
      return 'Connection error. Please try again.';
    }
  };

  const sendMessage = useCallback(
    async (text = input) => {
      if (!text.trim() || loading) return;

      const userMsg = { role: 'user', text };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setLoading(true);

      const updatedHistory = [...history, { role: 'user', parts: [{ text }] }];

      setHistory(updatedHistory);

      const reply = await fetchReply(updatedHistory);

      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);

      setHistory((prev) => [
        ...prev,
        { role: 'model', parts: [{ text: reply }] },
      ]);

      setLoading(false);
      setSuggestions(getRandomSuggestions());
    },
    [input, loading, history],
  );

  return (
    <>
      {/* Toggle */}
      <button className="Pawfect-fab" onClick={() => setOpen((o) => !o)}>
        {open ? '✕' : '🐾'}
      </button>

      {open && (
        <div className="Pawfect-window">
          {/* Header */}
          <div className="Pawfect-header">
            <div>🐾</div>
            <div>
              <h3>Pawfect Assistant</h3>
              <p>● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="Pawfect-msgs">
            {messages.map((m, i) => (
              <div key={i} className={`Pawfect-row ${m.role}`}>
                <div className="Pawfect-bubble">{m.text}</div>
              </div>
            ))}

            {loading && <div className="Pawfect-typing">Typing...</div>}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="Pawfect-suggestions">
            <p className="sugg-label">Suggested questions</p>

            <div className="sugg-list">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  className="sugg-btn"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="Pawfect-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about your pet..."
            />
            <button onClick={() => sendMessage()}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
