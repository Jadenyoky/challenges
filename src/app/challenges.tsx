"use client";
import pic1 from "../assets/challenges-images/bento-grid.jpg";
import pic2 from "../assets/challenges-images/social-links.jpg";
import pic3 from "../assets/challenges-images/qr-code.jpg";
import { StaticImageData } from "next/image";
import moment from "moment";

type Challenge = {
  name: string;
  link: string;
  pic: StaticImageData;
  dateStart: string;
  date: string;
  days: string[];
  skills: string[];
};

const handleDate = (date: string) => {
  return moment(date).format("MMM DD, YYYY");
};

const handleTime = (start: string, end: string): string[] => {
  const first = moment(start);
  const final = moment(end);

  const diffInDays = final.diff(first, "days");
  const diffInHours = final.diff(first, "hours") % 24; // الساعات المتبقية بعد الأيام
  const diffInMinutes = final.diff(first, "minutes") % 60; // الدقائق المتبقية بعد الساعات

  const parts = [];
  if (diffInDays) parts.push(`${diffInDays} day${diffInDays > 1 ? "s" : ""}`);
  if (diffInHours) parts.push(`${diffInHours} h`);
  if (diffInMinutes) parts.push(`${diffInMinutes} m`);

  return parts;
};

const challenges: Challenge[] = [
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic1,
    dateStart: handleDate("11/14/2024"),
    date: handleDate("11/17/2024"),
    days: handleTime("11/14/2024", "11/17/2024"),
    skills: ["html", "css"],
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
    dateStart: handleDate("11/19/2024"),
    date: handleDate("11/19/2024"),
    days: handleTime("11/19/2024 20:00", "11/19/2024 22:00"),
    skills: ["html", "css"],
  },
  {
    name: "Qr Code",
    link: "/qr-code",
    pic: pic3,
    dateStart: handleDate("11/22/2024"),
    date: handleDate("11/22/2024"),
    days: handleTime("11/22/2024 18:40", "11/22/2024 19:20"),
    skills: ["html", "css"],
  },
];

export default challenges;
