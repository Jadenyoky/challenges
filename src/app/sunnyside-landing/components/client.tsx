"use client";
import React from "react";

// "/assets/images/sunnyside-landing/desktop/image-header.jpg"

const Client = () => {
  const clients = [
    {
      pic: "/assets/images/sunnyside-landing/image-emily.jpg",
      name: "emily r.",
      job: "Marketing Director",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
      pic: "/assets/images/sunnyside-landing/image-thomas.jpg",
      name: "thomas s.",
      job: "Chiet Operating Officer",
      text: "Sunnyside's enthusiasm coupled with their keen interest in brand's success made it a satisfying and enjoyable experience.",
    },
    {
      pic: "/assets/images/sunnyside-landing/image-jennie.jpg",
      name: "jennie f.",
      job: "Business Owner",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
  ];
  return (
    <main
      className="min-h-svh flex justify-center items-center text-center gap-[50px] flex-col max-md:gap-[20px]
    "
    >
      <h1
        className="text-[#a7abae] uppercase font-[fraunces] font-bold text-2xl tracking-[10px]
      max-md:tracking-[5px] p-[10px]
      max-md:text-xl
      mt-[50px]

      "
      >
        Client testimonials
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-[30px]">
        {clients.map((e, k) => {
          return (
            <div
              key={k}
              className="h-[400px] w-[400px] 
                max-md:w-[90%]
                flex flex-col justify-between items-center gap-[50px] p-[30px] 
                max-md:justify-evenly
                "
            >
              <img src={e.pic} className="rounded-full w-[70px] h-[70px]" />
              <p className="font-[barlow] text-balance font-[600] text-[#23303e] opacity-90 max-w-[90%]">
                {e.text}
              </p>
              <div className="flex flex-col gap-[10px] justify-center items-center">
                <p className="font-[fraunces] font-extrabold text-lg capitalize">
                  {e.name}
                </p>
                <span className="opacity-35 font-[barlow] font-[600] text-sm">
                  {e.job}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Client;
