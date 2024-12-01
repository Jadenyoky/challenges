"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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
import _ from "lodash";

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

  const year = new Date().getFullYear();

  const sorted = _.orderBy(challenges, "dateStart", "desc");

  const { scrollY } = useScroll();
  const ss = useTransform(scrollY, [0, 100], [1, 0]);
  const rr = useTransform(scrollY, [0, 100], [0, -60]);

  return (
    <main className="all">
      <motion.div
        className="main"
        variants={moving}
        initial="initial"
        animate="animate"
        style={{
          // opacity: ss,
          // scale: ss,
          translateY: rr,
        }}
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
        {sorted.map((challenge, index) => {
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
    days: string[];
    from: string;
    skills: string[];
  };
  index: number;
}

const Challenge = ({ data, index }: types) => {
  const [showInfo, setshowInfo] = useState<boolean>(false);

  const handleOpen = () => {
    setshowInfo(true);
  };
  const handleClose = () => {
    setshowInfo(false);
  };
  return (
    <motion.div
      key={index}
      variants={moving5}
      className={`challenge challenge${index + 1} `}
    >
      <Link className="card" href={data.link} key={index}>
        <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>

        <p className="name">{data.name}</p>
        <p className="date">{data.from}</p>
        <p className="days">
          {data.days.map((time, index) => {
            return <span key={index}>{time ? time : "-"}</span>;
          })}
        </p>

        <div className="highlight" />

        <Image alt={data.name} src={data.pic} />
      </Link>

      <div
        className="info"
        onClick={() => {
          handleOpen();
        }}
      >
        info
      </div>

      {showInfo && (
        <motion.div
          variants={moving7}
          initial="initial"
          animate="animate"
          className="modal"
        >
          <motion.div
            variants={moving7}
            className="highlight"
            onClick={() => {
              handleClose();
            }}
          />

          <motion.div
            className="modalCard"
            variants={moving8}
            initial="initial"
            animate="animate"
          >
            <motion.div
              onClick={() => {
                handleClose();
              }}
              className="close"
              variants={moving7}
            >
              <i className="fi fi-sr-square-close"></i> close
            </motion.div>

            <motion.div className="header" variants={moving5}>
              {data.name ? data.name : "-"}
            </motion.div>

            <motion.div className="image" variants={moving5}>
              <Link href={data.link}>
                <Image src={data.pic} alt={data.name} />
              </Link>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              Start:{" "}
              <span style={{ color: "white" }}>
                {data.dateStart ? data.dateStart : "-"}
              </span>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              Finish:{" "}
              <span style={{ color: "white" }}>
                {data.date ? data.date : "-"}
              </span>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              Proccess:
              <div className="proccess">
                {data.days.map((time, index) => {
                  return <span key={index}>{time ? time : "-"}</span>;
                })}
              </div>
            </motion.div>

            <motion.div className="status" variants={moving5}>
              skills:
              <div className="skills">
                {data.skills.map((skill, index) => {
                  return <span key={index}>{skill ? skill : "-"}</span>;
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
