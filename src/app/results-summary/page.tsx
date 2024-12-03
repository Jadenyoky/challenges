"use client";
import React, { useEffect } from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import pic1 from "/public/assets/images/results-summary/icon-reaction.svg";
import pic2 from "/public/assets/images/results-summary/icon-memory.svg";
import pic3 from "/public/assets/images/results-summary/icon-verbal.svg";
import pic4 from "/public/assets/images/results-summary/icon-visual.svg";
const Page = () => {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: pic1,
      background: "#fff6f5",
      color: "#FF5555",
    },
    {
      category: "Memory",
      score: 92,
      icon: pic2,
      background: "#fffbf2",
      color: "#FEB52D",
    },
    {
      category: "Verbal",
      score: 61,
      icon: pic3,
      background: "#f2fbfa",
      color: "#3AC2A1",
    },
    {
      category: "Visual",
      score: 72,
      icon: pic4,
      background: "#f3f3fd",
      color: "#1125D6",
    },
  ];

  return (
    <main className={Styles.page}>
      <div className={Styles.container}>
        <div className={`${Styles.cardOne} ${Styles.card}`}>
          <p className={Styles.header}>Your Result</p>
          <div className={Styles.scoreContainer}>
            <p className={Styles.score}>76</p>
            <p className={Styles.text}>of 100</p>
          </div>
          <div className={Styles.last}>
            <p className={Styles.word}>Great</p>
            <p className={Styles.sub}>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className={`${Styles.cardTwo} ${Styles.card}`}>
          <p className={Styles.header}>Summary</p>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={Styles.info}
                style={{
                  background: item.background,
                }}
              >
                <Image
                  className={Styles.icon}
                  src={item.icon}
                  alt={item.category}
                />
                <p
                  className={Styles.name}
                  style={{
                    color: item.color,
                  }}
                >
                  {item.category}
                </p>
                <p className={Styles.score}>
                  <span className={Styles.final}>{item.score}</span> / 100
                </p>
              </div>
            );
          })}
          <button className={Styles.button}>Continue</button>
        </div>
      </div>
    </main>
  );
};

export default Page;
