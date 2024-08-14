import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/walkthrough">walkthrough</Link>
      </li>
    </ul>
  );
}
