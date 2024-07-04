"use client";
import styles from "./Page.module.css";
import Presentation from "./presentation/Presentation";
import About from "./about/About";
import Interests from "./interestList/Interests";
import { Contact } from "./contact/contact";

import ProgressBar from "./ProgressBar/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Presentation />
      <About />
      <Interests />
      <Contact />
    </>
  );
}
