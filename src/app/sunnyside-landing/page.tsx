"use client";
import React from "react";
import "./page.module.css";
import Hero from "./components/hero";
import Section from "./components/section";
import Client from "./components/client";
import Footer from "./components/footer";

const Page = () => {
  return (
    <main>
      <Hero />
      <Section />
      <Client />
      <Footer />
    </main>
  );
};

export default Page;
