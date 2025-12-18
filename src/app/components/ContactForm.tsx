'use client';

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"" | "sending" | "sent" | "error">("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const text = await res.text();
        setErrorMsg(text || `Server error: ${res.status}`);
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      {/* Name Input */}
      <div>
        <input
          aria-label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
          className="w-full p-3 bg-[#1a1a1f] text-white placeholder-gray-500 rounded border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-300"
        />
      </div>

      {/* Email Input */}
      <div>
        <input
          aria-label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className="w-full p-3 bg-[#1a1a1f] text-white placeholder-gray-500 rounded border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-300"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          aria-label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Message"
          className="w-full p-3 bg-[#1a1a1f] text-white placeholder-gray-500 rounded border border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-300 h-32 resize-none"
        />
      </div>

      {/* Submit Button & Status */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        
        {status === "sent" && (
          <span className="text-green-400 font-semibold">✓ Message sent!</span>
        )}
        
        {status === "error" && (
          <span className="text-red-400 font-semibold">✗ Error</span>
        )}
      </div>

      {/* Error Message */}
      {errorMsg && (
        <p className="text-red-400 text-sm mt-3 p-2 bg-red-950/20 rounded border border-red-700/50">
          {errorMsg}
        </p>
      )}

      {/* Success Message */}
      {status === "sent" && (
        <p aria-live="polite" aria-atomic="true" className="text-green-400 text-sm mt-3 p-2 bg-green-950/20 rounded border border-green-700/50">
          Message sent!
        </p>
      )}
    </form>
  );
}