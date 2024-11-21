"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import challenges from "./challenges";
import {
  moving,
  moving2,
  moving3,
  moving4,
  moving5,
  moving6,
  moving7,
  moving8,
} from "./anime";
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
          return <Challenge key={index} data={challenge} index={index} />;
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

interface types {
  data: {
    name: string;
    link: string;
    pic: StaticImageData;
    dateStart: string;
    date: string;
    days: string;
    skills: string[];
  };
  index: number;
}

const Challenge = ({ data, index }: types) => {
  const [showInfo, setshowInfo] = useState<boolean>(false);
  return (
    <motion.div
      key={Challenge.name}
      variants={moving5}
      className={`challenge challenge${index + 1} `}
    >
      <Link className="card" href={data.link} key={index}>
        <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>

        <p className="name">{data.name}</p>
        <p className="date">{data.date}</p>
        <p className="days">{data.days}</p>

        <div className="highlight" />

        <Image alt={data.name} src={data.pic} />
      </Link>

      <div
        className="info"
        onClick={() => {
          setshowInfo(true);
        }}
      >
        <i className="fi fi-sr-square-info"></i> info
      </div>

      {showInfo && (
        <motion.div
          variants={moving7}
          initial="initial"
          animate="animate"
          className="modal"
        >
          <motion.div
            className="modalCard"
            variants={moving8}
            initial="initial"
            animate="animate"
          >
            <motion.div
              onClick={() => setshowInfo(false)}
              className="close"
              variants={moving7}
            >
              <i className="fi fi-sr-square-close"></i> close
            </motion.div>

            <motion.div className="header" variants={moving5}>
              {data.name}
            </motion.div>

            <motion.div className="image" variants={moving5}>
              <Image src={data.pic} alt={data.name} />
            </motion.div>

            <motion.div className="status" variants={moving5}>
              Start: <span style={{ color: "white" }}>{data.dateStart}</span>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              Finish: <span style={{ color: "white" }}>{data.date}</span>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              Proccess:
              <span style={{ color: "white" }}>{data.days}</span>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              skills:
              <div className="skills">
                {data.skills.map((skill, index) => {
                  return <span key={index}>{skill}</span>;
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Page;
