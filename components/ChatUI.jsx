'use client';
import { useState, useRef, useEffect } from 'react';

const seed = [
  { from: 'them', text: 'Hey there! 👋' },
  { from: 'me', text: 'Hi! Love your travel photos.' },
  { from: 'them', text: 'Thanks! What city are you in?' }
];

export default function ChatUI() {
  const [msgs, setMsgs] = useState(seed);
  const [text, setText] = useState('');
  const endRef = useRef(null);

  const send = () => {
    if (!text.trim()) return;
    setMsgs(prev => [...prev, { from: 'me', text: text.trim() }]);
    setText('');
    setTimeout(() => {
      setMsgs(prev => [...prev, { from: 'them', text: 'Nice! Let’s plan coffee ☕' }]);
    }, 700);
  };

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs]);

  return (
    <div className="d-flex flex-column h-100">
      <div className="d-flex align-items-center gap-3 p-3 border-bottom border-light-subtle">
        <div className="rounded-circle overflow-hidden" style={{width:40,height:40}}>
          <img src="https://picsum.photos/80" alt="avatar" className="w-100 h-100" />
        </div>
        <div>
          <div className="fw-semibold">Ada</div>
          <div className="small text-secondary">Online</div>
        </div>
      </div>
      <div className="flex-grow-1 overflow-auto p-3" style={{minHeight: 300}}>
        {msgs.map((m,i) => (
          <div key={i} className={`d-flex ${m.from === 'me' ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
            <div className={`chat-bubble ${m.from}`}>
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="footer-cta p-3 border-top border-light-subtle">
        <div className="input-group">
          <input className="form-control input-soft" placeholder="Type a message…" value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} />
          <button className="btn btn-accent" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  );
}
