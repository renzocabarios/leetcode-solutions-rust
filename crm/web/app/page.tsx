"use client";
import { Button, Datatable, Navbar } from "@/components/";
import { useCustomerStore } from "@/states";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const { fetchCustomers, customers, removeCustomer } =
    useCustomerStore() as any;

  const router = useRouter();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteTodo = async (id: any) => {
    try {
      const response = await fetch(
        `http://localhost:9000/api/v1/customers/${id}`,
        {
          method: "DELETE",
        }
      );

      const { status } = await response.json();
      if (status == "success") removeCustomer(id);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const header: any[] = ["Name", "Email", "Actions"];
  return (
    <main>
      <Navbar></Navbar>
      <Datatable header={header}>
        {customers.map((e: any) => (
          <tr key={e._id}>
            <td>
              {e.firstName} {e.lastName}
            </td>
            <td>{e.email}</td>
            <td className="flex justify-center gap-3">
              <Button
                onClick={() => {
                  router.push(`/edit?id=${e._id}`);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  deleteTodo(e._id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </Datatable>
    </main>
  );
}
