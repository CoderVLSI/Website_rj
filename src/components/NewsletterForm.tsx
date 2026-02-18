"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing! 🎉");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>
      <p className="text-gray-600 mb-8">Subscribe to get notified about new blog posts and updates</p>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl">
          <p className="font-semibold text-lg">{message}</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-3 text-sm text-green-700 hover:text-green-900 underline"
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 max-w-md disabled:opacity-50"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-4 text-red-600 font-semibold">{message}</p>
      )}
    </div>
  );
}
