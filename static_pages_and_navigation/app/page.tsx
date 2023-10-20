import { Card, Navbar } from "@/components";
import style from "./style.module.css";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className={style.container}>
        <Card>
          <h1>Next JS</h1>
          <h5 className="px-60">
            an open-source JavaScript framework that is designed for building
            modern web applications, with a focus on server-rendered React
            applications. It is built on top of React, and it offers a range of
            features and benefits for web development.
          </h5>
        </Card>
      </div>
    </main>
  );
}
