import React from "react";
import style from "./style.module.css";

function Entry({ title, content }: any) {
  return (
    <>
      <div className={style.container}>
        <p className="text-2xl font-extrabold">{title}</p>
        <p className="text-lg">{content}</p>
      </div>
    </>
  );
}

export default Entry;
