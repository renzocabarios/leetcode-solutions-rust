"use client";
import { useTodoStore } from "@/states";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";

export default function Home() {
  // const { todos, addTodo } = useTodoStore() as any;
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  useEffect(() => {
    const start = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/api/v1/todos/${id}`
        );

        const { data, status } = await response.json();
        console.log(data);

        if (status === "success") {
          settitle(data[0].title);
          setdescription(data[0].description);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    start();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9000/api/v1/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      const { data, status } = await response.json();
      if (status === "success") {
        router.push("/");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <h1>{id}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          defaultValue={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          defaultValue={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
