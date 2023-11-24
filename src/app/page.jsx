"use client";
import styles from "./page.module.css";
import { ThemeProvider } from "../context/theme-context";
import { useState, useEffect } from "react";
import { ModalProvider } from "../context/modal-context";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const MainComponent = dynamic(() => import("./App"), {
  loading: () => <Loading />,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <ThemeProvider>
      <ModalProvider>
        {isClient ? <MainComponent /> : <Loading />}
      </ModalProvider>
    </ThemeProvider>
  );
}
