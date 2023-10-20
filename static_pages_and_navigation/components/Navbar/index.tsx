import React from "react";
import style from "./style.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className={style.toolbar}>
        <h4 className="font-bold text-white-50">Next JS Roadmap</h4>

        <div className={style.links_container}></div>

        <div className={style.links_container}>
          <h5>
            <Link href="/">Home</Link>
          </h5>
          <h5>
            <Link href="/roadmap">Roadmap</Link>
          </h5>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
