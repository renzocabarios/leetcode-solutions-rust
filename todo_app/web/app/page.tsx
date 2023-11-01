"use client";
import { useTodoStore } from "@/states";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components";

export default function Home() {
  const { fetchTodos, todos, removeTodo } = useTodoStore() as any;
  const router = useRouter();

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:9000/api/v1/todos/${id}`, {
        method: "DELETE",
      });

      const { status } = await response.json();
      if (status == "success") removeTodo(id);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <main className="flex flex-row w-full gap-2">
      {todos.map((e: any) => (
        <Card>
          <h3 className="font-bold text-xl">{e.title}</h3>
          <p className="font-semibold">{e.description}</p>
          <Button
            onClick={() => {
              deleteTodo(e._id);
            }}
          >
            Delete me
          </Button>
          <Button
            onClick={() => {
              router.push(`/edit?id=${e._id}`);
            }}
          >
            Edit
          </Button>
        </Card>
      ))}
    </main>
  );
}
