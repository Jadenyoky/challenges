"use client";
import Image from "next/image";
import React from "react";
import pic1 from "../../assets/images/social-links/avatar-jessica.jpeg";
import Styles from "./social.module.css";
import Link from "next/link";
const Page = () => {
  const links = [
    {
      link: "#",
      name: "Github",
    },
    {
      link: "#",
      name: "Frontend Mentor",
    },
    {
      link: "#",
      name: "Linkedin",
    },
    {
      link: "#",
      name: "Twitter",
    },
    {
      link: "#",
      name: "Instagram",
    },
  ];
  return (
    <main>
      <section className={`${Styles.container}`}>
        <div className={`${Styles.card}`}>
          <div className={`${Styles.avatar}`}>
            <Image className={`${Styles.image1}`} src={pic1} alt="" />
          </div>
          <p className={`${Styles.text_1}`}>
            Jessica Randall
            <span className={`${Styles.plus}`}>London, United Kingdom</span>
          </p>
          <p className={`${Styles.text_2}`}>
            "Front-end developer and avid reader."
          </p>
          <div className={`${Styles.links}`}>
            {links.map((e, k) => {
              return (
                <Link key={k} className={`${Styles.link}`} href={e.link}>
                  {e.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
