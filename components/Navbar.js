"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      {" | "}
      <Link href="/profile">Profile</Link>
      {" | "}
      <Link href="/tasks">Tasks</Link>
    </nav>
  );
}