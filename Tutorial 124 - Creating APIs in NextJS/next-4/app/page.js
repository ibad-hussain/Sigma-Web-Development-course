"use client"
import styles from "./page.module.css";

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "John",
      role: "Coder"
    }

    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log("Client: ", res)
  }

  return (
    <div>
      <h1>NextJS API Routes Testing</h1>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}
