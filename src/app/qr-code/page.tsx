"use client";
import React from "react";
import Styles from "./qr.module.css";
import Image from "next/image";
import pic1 from "../../assets/images/qr-code/image-qr-code.png";

const Page = () => {
  return (
    <main className={Styles.container}>
      <div className={Styles.card}>
        <Image className={Styles.image1} src={pic1} alt="qr-code" />
        <p className={Styles.text_1}>
          Improve your front-end skills by building projects
        </p>
        <p className={Styles.text_2}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <br />
    </main>
  );
};

export default Page;
