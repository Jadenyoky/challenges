"use client";
import React from "react";
import { Logo } from "./assets";

const Footer = () => {
  const images = [
    {
      desktop:
        "/assets/images/sunnyside-landing/desktop/image-gallery-milkbottles.jpg",
      mobile:
        "/assets/images/sunnyside-landing/mobile/image-gallery-milkbottles.jpg",
      alt: "milkbottles",
    },
    {
      desktop:
        "/assets/images/sunnyside-landing/desktop/image-gallery-orange.jpg",
      mobile:
        "/assets/images/sunnyside-landing/mobile/image-gallery-orange.jpg",
      alt: "orange",
    },

    {
      desktop:
        "/assets/images/sunnyside-landing/desktop/image-gallery-cone.jpg",
      mobile: "/assets/images/sunnyside-landing/mobile/image-gallery-cone.jpg",
      alt: "cone",
    },
    {
      desktop:
        "/assets/images/sunnyside-landing/desktop/image-gallery-sugarcubes.jpg",
      mobile:
        "/assets/images/sunnyside-landing/mobile/image-gallery-sugarcubes.jpg",
      alt: "sugarcubes",
    },
  ];
  return (
    <main className="min-h-svh grid grid-rows-2">
      <div className="grid grid-cols-4 max-md:grid-cols-2">
        {images.map((image, index) => (
          <picture key={index}>
            <source media="(max-width: 768px)" srcSet={image.mobile} />
            <img
              className="h-full w-full object-cover"
              key={index}
              src={image.desktop}
              alt={image.alt}
            />
          </picture>
        ))}
      </div>
      <footer className="bg-[#91d3c5] flex flex-col justify-evenly items-center ">
        <div className="flex flex-col gap-[50px] justify-center items-center">
          <div className="scale-[1.3]">
            <Logo color="#387f6f" />
          </div>
          <div
            className="flex flex-wrap gap-[50px] justify-center
          [&>button]:text-[#387f6f] font-[barlow] font-[600]
          [&>button]:transition-[0.3s]
          md:hover:[&>button]:text-[white]
          active:[&>button]:text-[white]
          
          "
          >
            <button>About</button>
            <button>Services</button>
            <button>Projects</button>
          </div>
        </div>
        <div
          className="flex flex-wrap gap-[30px]
          justify-center
        [&>i]:text-[#387f6f]
        [&>i]:text-xl
        [&>i]:transition-[0.3s]
        [&>i]:cursor-pointer
        md:hover:[&>i]:text-[white]
        active:[&>i]:text-[white]
        "
        >
          <i className="fi fi-brands-facebook"></i>
          <i className="fi fi-brands-instagram"></i>
          <i className="fi fi-brands-twitter"></i>
          <i className="fi fi-brands-pinterest"></i>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
