"use client";

import { useEffect, useState } from "react";

export function ShareButtons() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent("Check out this amazing post by Sudha Devarakonda!")}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`Check out this amazing post: ${url}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold mb-4">Share this post</h3>
      <div className="flex flex-wrap gap-3">
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Facebook
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors inline-block"
        >
          Twitter
        </a>
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors inline-block"
        >
          WhatsApp
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors inline-block"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
