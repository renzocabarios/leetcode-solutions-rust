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
          TODO APP
        </h3>

        <div className={style.links_container}></div>
        <div className={style.links_container}>
          <Button
            onClick={() => {
              router.push("/add");
            }}
          >
            Create TODO
          </Button>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
