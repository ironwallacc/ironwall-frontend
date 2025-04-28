// src/pages/Home.jsx
import { useState, useEffect } from "react";

export default function Home() {
  const introMessage =
    "Forged to protect fair play. We're building the future of anti-cheat tech. Stay tuned, the firewall against foul play is rising.";

  const [message, setMessage] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < introMessage.length) {
      const timeout = setTimeout(() => {
        setMessage((prev) => prev + introMessage[i]);
        setI(i + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [i]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white text-center transition-all duration-700"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809')",
      }}
    >
      <div className="bg-black bg-opacity-70 p-10 rounded-2xl shadow-2xl max-w-3xl">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-6 drop-shadow-lg animate-pulse">
          IronWall Anti-Cheat
        </h1>
        <p className="text-xl leading-relaxed tracking-wide font-light text-gray-200">
          {message}
        </p>
      </div>
    </div>
  );
}
