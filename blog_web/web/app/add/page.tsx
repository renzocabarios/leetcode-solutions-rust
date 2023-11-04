"use client";
import { Button, InputField, Navbar } from "@/components/";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import { API_URL } from "@/env";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/sign-in");
    }
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user: any = JSON.parse(localStorage.getItem("user") ?? "{}");
    try {
      const response = await fetch(`${API_URL}entries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          user: user._id ?? "",
        }),
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
            <h3 className="font-bold text-lg">Create your entry</h3>
          </div>
          <InputField
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <InputField
            name="content"
            placeholder="Content"
            onChange={handleChange}
          />

          <div className="col-span-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
    </main>
  );
}
