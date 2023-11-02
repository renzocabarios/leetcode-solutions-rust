"use client";
import React from "react";
import style from "./style.module.css";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={style.toolbar}>
        <h3
          className="text-2xl font-extrabold"
          onClick={() => {
            router.push("/");
          }}
        >
          Customer Relational Management App
        </h3>

        <div className={style.links_container}></div>
        <div className={style.links_container}>
          <Button
            onClick={() => {
              router.push("/add");
            }}
          >
            Create Customer
          </Button>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
