"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // console.log(`ID is ${process.env.ID} and SECRET is ${process.env.SECRET}`)
  return (
    <div>
      This is Home
      <div>ID is {process.env.NEXT_PUBLIC_ID} and SECRET is {process.env.SECRET} and URI is {process.env.NEXT_PUBLIC_URI}</div>
    </div>
  );
}
