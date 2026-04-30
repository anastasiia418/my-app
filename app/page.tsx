"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router = useRouter();

  const goToAbout = () => {
    router.push("/about");
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Home Page</h1>

      <button onClick={goToAbout} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" style={{ marginTop: "1rem" }}>
        Go to About Page
      </button>
    </main>
  );
}
