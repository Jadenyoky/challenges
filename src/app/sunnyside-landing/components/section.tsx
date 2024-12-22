"use client";
import React from "react";

// "/assets/images/sunnyside-landing/desktop/image-header.jpg"

const Section = () => {
  return (
    <main>
      <section
        className="
      grid grid-cols-2 place-items-center
      max-md:grid-cols-1
      "
      >
        <div
          className="max-md:order-2 p-[30px] flex flex-col gap-[50px] items-baseline max-md:items-center max-md:py-[50px] max-md:text-center
          max-w-[90%] 
        "
        >
          <h1
            className="font-[fraunces] text-5xl font-bold text-[#23303e] leading-tight
          max-md:text-4xl
          "
          >
            Transform your brand
          </h1>
          <p className="text-balance opacity-40 font-[barlow] font-[600]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button
            className="font-[fraunces] font-bold uppercase relative 
            before:transition before:duration-300 ease-in-out
          before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:h-[15px] before:w-[108%] before:bg-[#fad400] before:opacity-35 before:z-[-1] before:rounded-md
          md:hover:before:opacity-100
          max-md:active:before:opacity-100
          "
          >
            <span className="ml-[10px]">Learn more</span>
          </button>
        </div>
        <picture className="max-md:order-1 self-start">
          <source
            media="(max-width: 768px)"
            srcSet="/assets/images/sunnyside-landing/mobile/image-transform.jpg"
          />
          <img
            src="/assets/images/sunnyside-landing/desktop/image-transform.jpg"
            alt="Image description"
            className="object-cover"
          />
        </picture>
      </section>
      <section
        className="
      grid grid-cols-2 place-items-center
      max-md:grid-cols-1
      "
      >
        <div
          className="max-md:order-2 order-2 p-[30px] flex flex-col gap-[50px] items-baseline max-md:items-center max-md:py-[50px] max-md:text-center
          max-w-[90%] 
        "
        >
          <h1
            className="font-[fraunces] text-5xl font-bold text-[#23303e] leading-tight
          max-md:text-4xl
          "
          >
            Stand out to the right audience
          </h1>
          <p className="text-balance opacity-40 font-[barlow] font-[600]">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <button
            className="font-[fraunces] font-bold uppercase relative 
            before:transition before:duration-300 ease-in-out
          before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:h-[15px] before:w-[108%] before:bg-[#fe7867] before:opacity-35 before:z-[-1] before:rounded-md
          active:before:opacity-100
          md:hover:before:opacity-100
          "
          >
            <span className="ml-[10px]">Learn more</span>
          </button>
        </div>
        <picture className="max-md:order-1 order-1 self-start">
          <source
            media="(max-width: 768px)"
            srcSet="/assets/images/sunnyside-landing/mobile/image-stand-out.jpg"
          />
          <img
            src="/assets/images/sunnyside-landing/desktop/image-stand-out.jpg"
            alt="Image description"
            className="object-cover"
          />
        </picture>
      </section>
      <section className="grid grid-cols-2 place-items-center max-md:grid-cols-1">
        <div className="relative">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="assets/images/sunnyside-landing/mobile/image-graphic-design.jpg"
            />
            <img
              src="assets/images/sunnyside-landing/desktop/image-graphic-design.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </picture>
          <div
            className="
            absolute bottom-[50px]
            flex justify-center items-center
            p-[20px]
            flex-col
            text-center
            gap-[50px]
            max-[900px]:gap-[20px]
            max-[900px]:bottom-0
            max-md:gap-[30px]
            max-md:bottom-[40px]
            text-[#25564b]
          "
          >
            <h1 className="font-[fraunces] font-bold text-3xl ">
              Graphic Design
            </h1>
            <p className=" text-balance font-[barlow] font-[500]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>
        <div className="relative">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="assets/images/sunnyside-landing/mobile/image-photography.jpg"
            />
            <img
              src="assets/images/sunnyside-landing/desktop/image-photography.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </picture>
          <div
            className="
            absolute bottom-[40px]
            flex justify-center items-center
            p-[20px]
            flex-col
            text-center
            gap-[50px]
            max-[900px]:gap-[20px]
            max-[900px]:bottom-0
            max-md:gap-[30px]
            max-md:bottom-[40px]
            text-[#19536b]
          "
          >
            <h1 className="font-[fraunces] font-bold text-3xl ">Photograghy</h1>
            <p className=" text-balance font-[barlow] font-[500]">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Section;
