"use client";
import { Button, InputField, Navbar } from "@/components/";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./style.module.css";
import { API_URL } from "@/env";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    lastName: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { status } = await response.json();

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
            <h3 className="font-bold text-lg">Create your account</h3>
          </div>
          <InputField
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <InputField
            name="lastName"
            placeholder="last Name"
            onChange={handleChange}
          />
          <div className="col-span-2">
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
    </main>
  );
}
