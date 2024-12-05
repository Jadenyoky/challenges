"use client";
import React, { useRef, useState } from "react";
import Styles from "./page.module.css";
import moment from "moment";
import { motion } from "framer-motion";

const Page = () => {
  const [days, setdays] = useState<string | number>("- -");
  const [months, setmonths] = useState<string | number>("- -");
  const [years, setyears] = useState<string | number>("- -");

  const [dayError, setdayError] = useState<string>("");
  const [monthError, setmonthError] = useState<string>("");
  const [yearError, setyearError] = useState<string>("");

  const [mode, setMode] = useState<string>("normal");

  const switchMode = () => {
    switch (mode) {
      case "normal":
        setMode("dynamic");
        break;
      case "dynamic":
        setMode("normal");
        break;
      default:
        setMode("dynamic");
        break;
    }
  };

  const handleAge = () => {
    const word: any = document.querySelectorAll(".word");
    const input: any = document.querySelectorAll("input");
    const day = input[0];
    const dayWord = word[0];
    const month = input[1];
    const monthWord = word[1];
    const year = input[2];
    const yearWord = word[2];

    const date = moment(
      `${day.value}/${month.value}/${year.value}`,
      "D/M/Y",
      true
    );

    const today = moment().format();
    const valid = date.isValid();
    const future = date.isAfter(today);

    const check = () => {
      const dayValue = Number(day.value);
      const monthValue = Number(month.value);
      const yearValue = Number(year.value);

      let valid = false;

      const handleDay = () => {
        if (day.value === "") {
          setdayError("This field is required");
          day.classList.add(Styles.errorEmptyBorder);
          dayWord.classList.add(Styles.errorEmptyColor);

          valid = false;
        } else {
          setdayError("");
          day.classList.remove(Styles.errorEmptyBorder);
          dayWord.classList.remove(Styles.errorEmptyColor);
          valid = true;

          if (
            dayValue >
              moment(`${yearValue}-${monthValue}`, "YYYY-MM").daysInMonth() ||
            dayValue <= 0
          ) {
            setdayError("Must be a valid day");
            day.classList.add(Styles.errorEmptyBorder);
            dayWord.classList.add(Styles.errorEmptyColor);

            valid = false;
          }
        }
      };

      const handleMonth = () => {
        if (month.value === "") {
          setmonthError("This field is required");
          month.classList.add(Styles.errorEmptyBorder);
          monthWord.classList.add(Styles.errorEmptyColor);

          valid = false;
        } else {
          setmonthError("");
          month.classList.remove(Styles.errorEmptyBorder);
          monthWord.classList.remove(Styles.errorEmptyColor);

          valid = true;
          if (monthValue < 1 || monthValue > 12) {
            setmonthError("Must be a valid month");
            month.classList.add(Styles.errorEmptyBorder);
            monthWord.classList.add(Styles.errorEmptyColor);
            valid = false;
          }
        }
      };

      const handleYear = () => {
        if (year.value === "") {
          setyearError("This field is required");
          year.classList.add(Styles.errorEmptyBorder);
          yearWord.classList.add(Styles.errorEmptyColor);
          valid = false;
        } else {
          setyearError("");
          year.classList.remove(Styles.errorEmptyBorder);
          yearWord.classList.remove(Styles.errorEmptyColor);
          valid = true;
          if (future) {
            setyearError("Must be in the past");
            year.classList.add(Styles.errorEmptyBorder);
            yearWord.classList.add(Styles.errorEmptyColor);
            valid = false;
          }
        }
      };

      handleDay();
      handleMonth();
      handleYear();

      return valid;
    };

    check();

    const result = () => {
      if (valid && !future && check()) {
        // const years = moment(today).diff(date, "years");
        // const months = moment(today).diff(date, "months");
        // const days = moment(today).diff(date, "days");

        const years = moment().diff(date, "years");
        const adjustedDate = moment(date).add(years, "years");
        const months = moment().diff(adjustedDate, "months");
        const finalAdjustedDate = moment(adjustedDate).add(months, "months");
        const days = moment().diff(finalAdjustedDate, "days");

        setdays(days);
        setmonths(months);
        setyears(years);
      } else if (!valid || future || !check()) {
        setdays("- -");
        setmonths("- -");
        setyears("- -");
      }
    };

    result();
  };

  const dynamicMode = () => {
    if (mode === "dynamic") {
      handleAge();
    }
  };

  const moving = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main className={Styles.page}>
      <motion.button
        key={mode}
        variants={moving}
        initial="initial"
        animate="animate"
        className={Styles.mode}
        onClick={() => {
          switchMode();
        }}
      >
        {mode}
      </motion.button>
      <section className={Styles.container}>
        <ul className={Styles.inputs}>
          <li className={Styles.input}>
            <p className={`${Styles.title} word`}>day</p>
            <input
              className={Styles.one}
              type="number"
              placeholder="dd"
              min={1}
              onChange={() => {
                dynamicMode();
              }}
            />
            <span className={Styles.error}>{dayError}</span>
          </li>
          <li className={Styles.input}>
            <p className={`${Styles.title} word`}>month</p>
            <input
              className={Styles.two}
              type="number"
              placeholder="mm"
              min={1}
              onChange={() => {
                dynamicMode();
              }}
            />
            <span className={Styles.error}>{monthError}</span>
          </li>
          <li className={Styles.input}>
            <p className={`${Styles.title} word`}>year</p>
            <input
              className={Styles.three}
              type="number"
              placeholder="yyyy"
              onChange={() => {
                dynamicMode();
              }}
            />
            <span className={Styles.error}>{yearError}</span>
          </li>
        </ul>

        <div className={Styles.divider}>
          <div className={Styles.line} />
          <button
            disabled={mode === "dynamic" ? true : false}
            className={Styles.button}
            onClick={() => {
              handleAge();
            }}
          >
            <svg
              className={Styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 46 44"
            >
              <g
                className={Styles.icon}
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
              >
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>

        <ul className={Styles.result}>
          <li className={Styles.status}>
            <motion.p
              key={years}
              variants={moving}
              initial="initial"
              animate="animate"
              className={Styles.number}
            >
              {years}
            </motion.p>
            <p className={Styles.name}>years</p>
          </li>
          <li className={Styles.status}>
            <motion.p
              key={months}
              variants={moving}
              initial="initial"
              animate="animate"
              className={Styles.number}
            >
              {months}
            </motion.p>
            <p className={Styles.name}>months</p>
          </li>
          <li className={Styles.status}>
            <motion.p
              key={days}
              variants={moving}
              initial="initial"
              animate="animate"
              className={Styles.number}
            >
              {days}
            </motion.p>
            <p className={Styles.name}>days</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Page;
