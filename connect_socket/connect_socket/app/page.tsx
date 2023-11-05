"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const [current, setcurrent] = useState<any>();
  const [messages, setmessages] = useState<any>([]);
  const [currentmessage, setcurrentmessage] = useState<string>("");

  useEffect(() => {
    const temp = io("http://192.168.100.3:3000/");
    setcurrent(temp);

    temp.on("message", (data: any) => {
      console.log(data);
      setmessages((prevMessages: any) => [...prevMessages, data.message]);
    });

    return () => {
      temp.disconnect();
    };
  }, []);

  const sendMessage = () => {
    current.emit("message", currentmessage);
    setcurrentmessage("");
  };

  const changeHandler = (e: any) => {
    setcurrentmessage(e.target.value);
  };

  return (
    <main>
      <input type="text" onChange={changeHandler} value={currentmessage} />
      <button onClick={sendMessage}>Send</button>
      {messages.map((e: any) => {
        return <p>{e}</p>;
      })}
    </main>
  );
}
