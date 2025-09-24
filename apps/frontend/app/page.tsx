"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Could not reach backend"));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>AI Productivity Platform — Frontend</h1>
      <p>Backend says: {msg}</p>
    </main>
  );
}
