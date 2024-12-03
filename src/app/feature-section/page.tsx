"use client";
import React from "react";
import Styles from "./section.module.css";
import Image from "next/image";
import pic1 from "/public/assets/images/feature-section/icon-supervisor.svg";
import pic2 from "/public/assets/images/feature-section/icon-team-builder.svg";
import pic3 from "/public/assets/images/feature-section/icon-karma.svg";
import pic4 from "/public/assets/images/feature-section/icon-calculator.svg";

const Page = () => {
  const cards = [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      class: Styles.card1,
      image: pic1,
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      class: Styles.card2,
      image: pic2,
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      class: Styles.card3,
      image: pic3,
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      class: Styles.card4,
      image: pic4,
    },
  ];

  return (
    <main className={Styles.page}>
      <div className={Styles.topPart}>
        <div className={Styles.one}>
          <p className={Styles.text_1}>Reliable, efficient delivery</p>
          <p className={Styles.text_2}>Powered by Technology</p>
        </div>
        <div className={Styles.two}>
          <span className={Styles.text_1}>
            Our Artificial Intelligence powered tools use millions of project
            data
          </span>
          <span className={Styles.text_2}>
            points to ensure that your project is successful
          </span>
        </div>
      </div>
      <div className={Styles.twoPart}>
        {cards.map((card, index) => {
          return (
            <div key={index} className={`${card.class} ${Styles.card}`}>
              <p className={Styles.title}>{card.title}</p>
              <p className={Styles.text}>{card.text}</p>
              <Image
                className={Styles.image}
                src={card.image}
                alt={card.title}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
