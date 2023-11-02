// stores/userStore.js
import { create } from "zustand";

export const useCustomerStore = create((set): any => ({
  customers: [],
  fetchCustomers: async () => {
    try {
      const response = await fetch("http://localhost:9000/api/v1/customers");
      const { data } = await response.json();
      set({ customers: data });
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  },
  addTodo: async (todo: any) => {
    set((state: any) => ({ todos: [...state.todos, todo] }));
  },
  removeCustomer: (id: any) => {
    set((state: any) => ({
      customers: [...state.customers.filter((e: any) => e._id != id)],
    }));
  },
}));
