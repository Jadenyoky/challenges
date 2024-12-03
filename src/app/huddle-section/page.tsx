"use client";
import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import logo from "/public/assets/images/huddle-section/logo.svg";
import hero from "/public/assets/images/huddle-section/illustration-mockups.svg";

const Page = () => {
  return (
    <main className={Styles.page}>
      <div className={Styles.container}>
        <Image className={Styles.logo} src={logo} alt="logo" />
        <div className={Styles.hero}>
          <Image className={Styles.image} src={hero} alt="hero" />
          <div className={Styles.content}>
            <h1 className={Styles.title}>
              Build The Community Your Fans Will Love
            </h1>
            <p className={Styles.text}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className={Styles.button}>Register</button>
          </div>
        </div>
        <div className={Styles.social}>
          <div className={Styles.icon}>
            <i className="fi fi-brands-facebook mt-1"></i>
          </div>
          <div className={Styles.icon}>
            <i className="fi fi-brands-twitter mt-1"></i>
          </div>
          <div className={Styles.icon}>
            <i className="fi fi-brands-instagram mt-1"></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
