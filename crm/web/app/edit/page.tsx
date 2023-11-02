"use client";
import { Button, InputField, Navbar } from "@/components/";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./style.module.css";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [formData, setFormData] = useState<any>({
    firstName: "",
    email: "",
    lastName: "",
  });

  useEffect(() => {
    const start = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/api/v1/customers/${id}`
        );

        const { data, status } = await response.json();
        console.log(data);

        if (status === "success") {
          setFormData({
            firstName: data[0].firstName ?? "",
            email: data[0].email ?? "",
            lastName: data[0].lastName ?? "",
          });
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    start();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:9000/api/v1/customers/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const { data, status } = await response.json();

      if (status === "success") {
        router.push("/");
      }
    } catch (error) {
      console.error("Error adding customers:", error);
    }
  };

  return (
    <main>
      <Navbar></Navbar>
      <main className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <div className="col-span-2">
            <h3 className="font-bold text-lg">Edit Customer Details</h3>
          </div>
          <div className="col-span-2">
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              defaultValue={formData.email}
            />
          </div>
          <InputField
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            defaultValue={formData.firstName}
          />
          <InputField
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            defaultValue={formData.lastName}
          />
          <div className="col-span-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
    </main>
  );
}
