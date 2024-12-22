"use client";
import React, { useState } from "react";
import { Arrow, Logo, Menu } from "./assets";
import { AnimatePresence, motion } from "framer-motion";

// "/assets/images/sunnyside-landing/desktop/image-header.jpg"

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [menu, setmenu] = useState("menu");
  const handleOpen = () => {
    setOpen(!open);
    setmenu(open ? "menu" : "close");
  };
  const moving = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const moving2 = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const moving3 = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <main
      className="h-svh w-full relative bg-[url('/assets/images/sunnyside-landing/desktop/image-header.jpg')]
    bg-cover bg-center
    max-md:bg-[url('/assets/images/sunnyside-landing/mobile/image-header.jpg')]
    "
    >
      <nav className=" flex justify-between items-center w-[90%] m-auto py-4">
        <Logo />
        <ul
          className="
          max-md:hidden
          flex text-[#e7f7fc] font-[barlow] font-[500]
          items-center
          *:transition-all *:duration-300 *:py-2 *:px-5  *:rounded-[50px]
          hover:[&>button]:text-white hover:[&>button]:bg-[#f1f1f13e]
        "
        >
          <button>About</button>
          <button>Services</button>
          <button>Projects</button>
          <button className="ml-8 py-[15px!important] font-[fraunces] font-bold bg-[#f1f1f1] text-black uppercase ">
            Contact
          </button>
        </ul>
        <div className="md:hidden">
          <button onClick={() => handleOpen()} className="p-2 outline-none">
            <Menu color={open ? "#ffffff80" : "white"} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <motion.ul
              key={menu}
              variants={moving}
              initial="initial"
              animate="animate"
              exit={"exit"}
              className="md:hidden z-10 transition duration-300 absolute
           bg-[white] w-[calc(90%-8px)] top-[100px] left-[50%] translate-x-[-50%] p-5 h-[350px] max-h-[90%]
           flex flex-col items-center justify-evenly gap-4
           -m-1
           *:text-[#918f9e] *:font-[barlow] *:font-[500] *:text-xl
          "
            >
              <span
                className="absolute -top-[30px] right-0 w-8 h-8 bg-[white]"
                style={{
                  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                }}
              />
              <motion.button variants={moving2}>About</motion.button>
              <motion.button variants={moving2}>Services</motion.button>
              <motion.button variants={moving2}>Projects</motion.button>
              <motion.button
                variants={moving2}
                className="py-3 px-5 font-[fraunces!important] font-[700!important] bg-[#fad400] text-[black!important]
            uppercase rounded-[50px]"
              >
                Contact
              </motion.button>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-[85%] relative">
        <motion.div
          variants={moving}
          initial="initial"
          animate="animate"
          className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[100px] items-center
        max-md:top-[48%] 
        "
        >
          <motion.h1
            variants={moving2}
            className="text-center text-[#e7f7fc] font-[fraunces] font-[700] text-5xl uppercase tracking-wider leading-snug
          text-nowrap
          max-md:text-wrap
          max-[350px]:text-4xl
        "
          >
            We are creatives
          </motion.h1>
          <motion.div variants={moving3}>
            <Arrow />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
