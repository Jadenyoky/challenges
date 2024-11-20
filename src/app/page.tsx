"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import challenges from "./challenges";
import { moving, moving2, moving3, moving4, moving5, moving6 } from "./anime";
import logo from "../assets/images/challenge.png";
import { useState } from "react";

const Page = () => {
  const social = [
    {
      link: "https://www.facebook.com/jaden.yoky2014",
      icon: <i className="fi fi-brands-facebook"></i>,
    },
    {
      link: "https://x.com/JadenYoky",
      icon: <i className="fi fi-brands-twitter"></i>,
    },
    {
      link: "https://www.instagram.com/jadenyoky",
      icon: <i className="fi fi-brands-instagram"></i>,
    },
    {
      link: "https://github.com/Jadenyoky",
      icon: <i className="fi fi-brands-github"></i>,
    },
  ];

  const [year, setyear] = useState(new Date().getFullYear());

  return (
    <main className="all">
      <motion.div
        className="main"
        variants={moving}
        initial="initial"
        animate="animate"
      >
        <motion.div className="background" variants={moving2} />
        <motion.div variants={moving3} className="text-header">
          <Image alt="logo" src={logo} /> Challenges By <span>Jaden</span>
        </motion.div>
      </motion.div>

      <motion.div
        variants={moving4}
        initial="initial"
        animate="animate"
        className="content"
      >
        {challenges.map((challenge, index) => {
          return (
            <Link href={challenge.link} key={index}>
              <motion.div
                key={challenges[index].name}
                variants={moving5}
                className={`challenge challenge${index + 1} `}
              >
                <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                <p className="name">{challenge.name}</p>
                <p className="date">{challenge.date}</p>
                <p className="days">{challenge.days}</p>

                <div />
                <Image alt={challenge.name} src={challenge.pic} />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>

      <motion.div
        variants={moving6}
        initial="initial"
        animate="animate"
        className="footer"
      >
        <div className="social">
          {social.map((element, index) => {
            return (
              <Link className="icon" href={element.link} key={index}>
                {element.icon}
              </Link>
            );
          })}
        </div>
        <p>
          <Link href={"https://portfolio-40.web.app"}>
            Jaden{" "}
            <span
              style={{
                color: "#72fa93",
              }}
            >
              | {year}
            </span>
          </Link>
        </p>
      </motion.div>
    </main>
  );
};

export default Page;
