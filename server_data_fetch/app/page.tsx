import { Card, Navbar } from "@/components";
import style from "./style.module.css";

async function getData() {
  const res = await fetch("http://localhost:9000/api/v1/items");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main>
      <Navbar />
      <div className={style.container}>
        {data.map((e: any) => (
          <Card>
            <div className={style.item_card}>
              <h1>{e.name}</h1>
              <h1>PHP {e.price}</h1>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
