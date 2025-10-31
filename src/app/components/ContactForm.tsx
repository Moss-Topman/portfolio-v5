"use client"; // Client for state

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) setStatus("Message sent!");
    else setStatus("Error sending message.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
        aria-label="Name"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
        aria-label="Email"
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
        aria-label="Message"
        required
      />
      <button type="submit" className="w-full p-2 bg-purple-500 text-white rounded">Send</button>
      {status && <p aria-live="polite" className="mt-4 text-center">{status}</p>}
    </form>
  );
}