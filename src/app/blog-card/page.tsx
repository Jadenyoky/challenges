"use client";
import React from "react";
import Styles from "./blog.module.css";
import Image from "next/image";
import pic1 from "../../assets/images/blog-card/illustration-article.svg";
import pic2 from "../../assets/images/blog-card/image-avatar.webp";

const Page = () => {
  return (
    <main className={Styles.container}>
      <div className={Styles.card}>
        <Image className={Styles.image1} src={pic1} alt="blog-card" />
        <div className={Styles.tag}>Learning</div>
        <p className={Styles.text_1}>Published 21 Dec 2023</p>
        <p className={Styles.text_2}>HTML & CSS foundations</p>
        <p className={Styles.text_3}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <div className={Styles.avatar}>
          <Image className={Styles.image2} src={pic2} alt="avatar" />
          <p className={Styles.text_4}>Greg Hooper</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
