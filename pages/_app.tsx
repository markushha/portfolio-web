import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Mainpage.css";
import "@/styles/Modal.css";
import "@/styles/Projects.css";
import "@/styles/Progress.css";
import "@/styles/Socials.css";
import "@/styles/Footer.css";

import '@/styles/MobileAdaptive.css';

import type { AppProps } from "next/app";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { Progress } from "@/app/components/progress";
import { useProgressStore } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };

    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
    </>
  );
}
