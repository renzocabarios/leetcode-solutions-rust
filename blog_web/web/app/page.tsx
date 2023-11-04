"use client";
import { Entry, Navbar } from "@/components";
import { API_URL } from "@/env";
import { useEffect, useState } from "react";

export default function Home() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const start = async () => {
      try {
        const response = await fetch(`${API_URL}entries`);
        const { data, status } = await response.json();
        if (status === "success") {
          setEntries(data);
        }
      } catch (error) {
        console.error("Error adding customers:", error);
      }
    };
    start();
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      <div className="p-4 flex flex-col gap-5">
        {entries.map((e: any) => (
          <Entry key={e._id} title={e.title} content={e.content} />
        ))}
      </div>
    </main>
  );
}
