"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { challenges } from "./challenges";
import { moving, moving2, moving3, moving4, moving5 } from "./anime";
import _ from "lodash";

const Page = () => {
  return (
    <main
      style={{
        minHeight: "100svh",
      }}
    >
      <motion.div
        className="main"
        variants={moving}
        initial="initial"
        animate="animate"
      >
        <motion.div className="background" variants={moving2} />
        <motion.div variants={moving3} className="text-header">
          Challenges By <span>Jaden</span>
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
                variants={moving5}
                className={`challenge challenge${index + 1} `}
              >
                <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                <p>{challenge.name}</p>
                <div />
                <Image alt={challenge.name} src={challenge.pic} />
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </main>
  );
};

export default Page;
