"use client";
import pic1 from "../assets/challenges-images/bento-grid.jpg";
import pic2 from "../assets/challenges-images/social-links.jpg";
import { StaticImageData } from "next/image";
import moment from "moment";

type Challenge = {
  name: string;
  link: string;
  pic: StaticImageData;
  dateStart: string;
  date: string;
  days: string;
  skills: string[];
};

const handleDate = (date: string) => {
  return moment(date).format("MMM DD, YYYY");
};

const handleDays = (start: string, end: string) => {
  const first = moment(start);
  const final = moment(end);

  const diffInDays = final.diff(first, "days");
  const daysText =
    diffInDays === 0 || diffInDays === 1 ? "1 day" : `${diffInDays} days`;
  return daysText;
};

const challenges: Challenge[] = [
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic1,
    dateStart: handleDate("11/14/2024"),
    date: handleDate("11/17/2024"),
    days: handleDays("11/14/2024", "11/17/2024"),
    skills: ["html", "css"],
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
    dateStart: handleDate("11/19/2024"),
    date: handleDate("11/19/2024"),
    days: handleDays("11/19/2024", "11/19/2024"),
    skills: ["html", "css"],
  },
];

export default challenges;
