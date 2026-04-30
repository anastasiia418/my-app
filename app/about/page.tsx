"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>About Page</h1>

      <button onClick={() => router.back()} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"style={{ marginTop: "1rem" }}>
        Go Back
      </button>
    </main>
  );
}
