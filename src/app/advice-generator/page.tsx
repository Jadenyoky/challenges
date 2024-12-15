"use client";
import React, { useEffect, useState } from "react";
import { Dice, DividerDesktop, DividerMobile } from "./assets";
import "./page.module.css";
import axios from "axios";
import { motion } from "framer-motion";

const Page = () => {
  const url = "https://api.adviceslip.com/advice";

  const [advice, setadvice] = useState<any>({});

  const getAdvice = async () => {
    const res = await axios.get(url);
    setadvice(res.data);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  const moving = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  return (
    <main className="h-svh bg-[#1F2632] flex justify-center items-center">
      <div className="rounded-3xl bg-[#323A49] h-[400px] max-h-[80%] w-[600px] max-w-[90%] overflow-auto flex gap-3 flex-col justify-around items-center p-7 font-[manrope]">
        <div
          className="text-[#52FFA8] font-[600] flex
        tracking-[5px] text-sm"
        >
          ADVICE #
          <motion.span
            key={advice.slip?.id}
            variants={moving}
            initial="initial"
            animate="animate"
          >
            {advice.slip?.id}
          </motion.span>
        </div>
        <motion.div
          key={advice.slip?.advice}
          variants={moving}
          initial="initial"
          animate="animate"
          className="text-[#CEE3E9] font-[800] text-[22px] sm:text-[28px] text-pretty text-center "
        >
          "{advice.slip?.advice}"
        </motion.div>
        <picture>
          <source
            media="(max-width: 500px)"
            srcSet={
              "/assets/images/advice-generator/pattern-divider-mobile.svg"
            }
          />
          <source
            media="(max-width: 768px)"
            srcSet={
              "/assets/images/advice-generator/pattern-divider-desktop.svg"
            }
          />
          <img
            src={"/assets/images/advice-generator/pattern-divider-desktop.svg"}
            alt="Divider"
            className="mb-[40px]"
          />
        </picture>
      </div>
      <div
        onClick={() => {
          getAdvice();
        }}
        className="cursor-pointer absolute bottom-[19%] left-[50%] -translate-x-2/4 ml-1 bg-[#52FFA8] w-[60px] h-[60px] rounded-full flex justify-center items-center transition duration-300
        active:shadow-[0_0_25px] active:shadow-[#52FFA8]
      md:hover:shadow-[0_0_25px] md:hover:shadow-[#52FFA8]
      "
      >
        <Dice />
      </div>
    </main>
  );
};

export default Page;
