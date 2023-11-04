"use client";
import React, { useEffect } from "react";
import style from "./style.module.css";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  useEffect(() => {}, []);
  return (
    <>
      <div className={style.toolbar}>
        <h3
          className="text-2xl font-extrabold"
          onClick={() => {
            router.push("/");
          }}
        >
          Blog Application
        </h3>

        <div className={style.links_container}></div>
        <div className={style.links_container}>
          {localStorage.getItem("user") ? (
            <>
              {" "}
              <Button
                onClick={() => {
                  router.push("/add");
                }}
              >
                Add
              </Button>
              <Button
                onClick={() => {
                  localStorage.removeItem("user");
                  router.push("/sign-in");
                }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                Sign In
              </Button>
              <Button
                onClick={() => {
                  router.push("/sign-up");
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
