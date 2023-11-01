// stores/userStore.js
import { create } from "zustand";
import { useRouter } from "next/navigation";

export const useTodoStore = create((set, get): any => ({
  todos: [],

  fetchTodos: async () => {
    try {
      const response = await fetch("http://localhost:9000/api/v1/todos");
      const { data } = await response.json();
      set({ todos: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
  addTodo: async (todo: any) => {
    set((state: any) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: async (id: any) => {
    console.log();

    set((state: any) => ({
      todos: [...state.todos.filter((e: any) => e._id != id)],
    }));
  },
}));
