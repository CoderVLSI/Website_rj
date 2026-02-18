"use client";

import { useState } from "react";

interface CommentFormProps {
  onCommentAdded?: (name: string, comment: string) => void;
}

export function CommentForm({ onCommentAdded }: CommentFormProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setStatus("error");
      setMessage("Please fill in all fields");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Comment posted successfully! 🎉");
      onCommentAdded?.(name, comment);

      // Reset form after 2 seconds
      setTimeout(() => {
        setName("");
        setComment("");
        setStatus("idle");
        setMessage("");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl">
          <p className="font-semibold">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              required
            />
          </div>
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your Comment"
              rows={4}
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              required
            ></textarea>
          </div>
          {status === "error" && (
            <p className="text-red-600 font-semibold">{message}</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Posting..." : "Post Comment"}
          </button>
        </form>
      )}
    </div>
  );
}
