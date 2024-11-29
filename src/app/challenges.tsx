"use client";
import pic1 from "../assets/challenges-images/bento-grid.jpg";
import pic2 from "../assets/challenges-images/social-links.jpg";
import pic3 from "../assets/challenges-images/qr-code.jpg";
import pic4 from "../assets/challenges-images/blog-card.jpg";
import pic5 from "../assets/challenges-images/recipe-page.jpg";
import pic6 from "../assets/challenges-images/feature-section.jpg";
import pic7 from "../assets/challenges-images/easybank-landing.jpg";
import { StaticImageData } from "next/image";
import moment from "moment";

type Challenge = {
  name: string;
  link: string;
  pic: StaticImageData;
  dateStart: string;
  date: string;
  days: string[];
  from: string;
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

const handleFrom = (date: string) => {
  return moment(date).fromNow();
};

const challenges: Challenge[] = [
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic1,
    dateStart: handleDate("11/14/2024"),
    date: handleDate("11/17/2024"),
    from: handleFrom("11/17/2024"),
    days: handleTime("11/14/2024", "11/17/2024"),
    skills: ["html", "css"],
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
    dateStart: handleDate("11/19/2024"),
    date: handleDate("11/19/2024"),
    from: handleFrom("11/19/2024"),
    days: handleTime("11/19/2024 20:00", "11/19/2024 22:00"),
    skills: ["html", "css"],
  },
  {
    name: "Qr Code",
    link: "/qr-code",
    pic: pic3,
    dateStart: handleDate("11/22/2024"),
    date: handleDate("11/22/2024"),
    from: handleFrom("11/22/2024"),
    days: handleTime("11/22/2024 18:40", "11/22/2024 19:20"),
    skills: ["html", "css"],
  },
  {
    name: "Blog card",
    link: "/blog-card",
    pic: pic4,
    dateStart: handleDate("11/22/2024"),
    date: handleDate("11/23/2024"),
    from: handleFrom("11/23/2024"),
    days: handleTime("11/23/2024 00:10", "11/23/2024 00:50"),
    skills: ["html", "css"],
  },
  {
    name: "Recipe page",
    link: "/recipe-page",
    pic: pic5,
    dateStart: handleDate("11/23/2024"),
    date: handleDate("11/24/2024"),
    from: handleFrom("11/24/2024"),
    days: handleTime("11/23/2024 16:00", "11/24/2024 16:30"),
    skills: ["html", "css"],
  },
  {
    name: "Feature section",
    link: "/feature-section",
    pic: pic6,
    dateStart: handleDate("11/25/2024"),
    date: handleDate("11/26/2024"),
    from: handleFrom("11/26/2024"),
    days: handleTime("11/25/2024 22:58", "11/26/2024 01:05"),
    skills: ["html", "css"],
  },
  {
    name: "Easybank landing",
    link: "/easybank-landing",
    pic: pic7,
    dateStart: handleDate("11/27/2024"),
    date: handleDate("11/29/2024"),
    from: handleFrom("11/29/2024"),
    days: handleTime("11/27/2024 19:51", "11/29/2024 02:22"),
    skills: ["html", "css", "js"],
  },
];

export default challenges;
