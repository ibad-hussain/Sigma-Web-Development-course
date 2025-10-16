"use client"
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams()
  return (
    <div>
      I am Home. Here blog is {searchParams.get("blog")} and utm_source is {searchParams.get("utm_source")}
    </div>
  );
}
