"use client";
import { useTodoStore } from "@/states";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const { addTodo } = useTodoStore() as any;
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      const { data, status } = await response.json();
      if (status === "success") {
        addTodo(data[0]);
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <main>
      <h1>Send POST Request</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setdescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
