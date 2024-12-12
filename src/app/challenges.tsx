"use client";
import pic1 from "/public/assets/challenges-images/bento-grid.jpg";
import pic2 from "/public/assets/challenges-images/social-links.jpg";
import pic3 from "/public/assets/challenges-images/qr-code.jpg";
import pic4 from "/public/assets/challenges-images/blog-card.jpg";
import pic5 from "/public/assets/challenges-images/recipe-page.jpg";
import pic6 from "/public/assets/challenges-images/feature-section.jpg";
import pic7 from "/public/assets/challenges-images/easybank-landing.jpg";
import pic8 from "/public/assets/challenges-images/results-summary.jpg";
import pic9 from "/public/assets/challenges-images/huddle-section.jpg";
import pic10 from "/public/assets/challenges-images/age-calculator.jpg";
import pic11 from "/public/assets/challenges-images/product-list.jpg";
import { StaticImageData } from "next/image";
import moment from "moment";

type Challenge = {
  id: number;
  name: string;
  link: string;
  pic: StaticImageData;
  dateStart: string;
  from: string;
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

const handleFrom = (date: string) => {
  return moment(date).fromNow();
};

const challenges: Challenge[] = [
  {
    id: 1,
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic1,
    dateStart: handleDate("11/14/2024"),
    from: handleFrom("11/14/2024 00:00"),
    date: handleDate("11/17/2024"),
    days: handleTime("11/14/2024 00:00", "11/17/2024 00:00"),
    skills: ["html", "css"],
  },
  {
    id: 2,
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
    dateStart: handleDate("11/19/2024"),
    from: handleFrom("11/19/2024 20:00"),
    date: handleDate("11/19/2024"),
    days: handleTime("11/19/2024 20:00", "11/19/2024 22:00"),
    skills: ["html", "css"],
  },
  {
    id: 3,
    name: "Qr Code",
    link: "/qr-code",
    pic: pic3,
    dateStart: handleDate("11/22/2024"),
    from: handleFrom("11/22/2024 18:40"),
    date: handleDate("11/22/2024"),
    days: handleTime("11/22/2024 18:40", "11/22/2024 19:20"),
    skills: ["html", "css"],
  },
  {
    id: 4,
    name: "Blog card",
    link: "/blog-card",
    pic: pic4,
    dateStart: handleDate("11/22/2024"),
    from: handleFrom("11/23/2024 00:10"),
    date: handleDate("11/23/2024"),
    days: handleTime("11/23/2024 00:10", "11/23/2024 00:50"),
    skills: ["html", "css"],
  },
  {
    id: 5,
    name: "Recipe page",
    link: "/recipe-page",
    pic: pic5,
    dateStart: handleDate("11/23/2024"),
    from: handleFrom("11/23/2024 16:00"),
    date: handleDate("11/24/2024"),
    days: handleTime("11/23/2024 16:00", "11/24/2024 16:30"),
    skills: ["html", "css"],
  },
  {
    id: 6,
    name: "Feature section",
    link: "/feature-section",
    pic: pic6,
    dateStart: handleDate("11/25/2024"),
    from: handleFrom("11/25/2024 22:58"),
    date: handleDate("11/26/2024"),
    days: handleTime("11/25/2024 22:58", "11/26/2024 01:05"),
    skills: ["html", "css"],
  },
  {
    id: 7,
    name: "Easybank landing",
    link: "/easybank-landing",
    pic: pic7,
    dateStart: handleDate("11/27/2024"),
    from: handleFrom("11/27/2024 19:51"),
    date: handleDate("11/29/2024"),
    days: handleTime("11/27/2024 19:51", "11/29/2024 02:22"),
    skills: ["html", "css", "js"],
  },
  {
    id: 8,
    name: "Results summary",
    link: "/results-summary",
    pic: pic8,
    dateStart: handleDate("11/29/2024"),
    from: handleFrom("11/29/2024 12:37"),
    date: handleDate("11/29/2024"),
    days: handleTime("11/29/2024 12:37", "11/29/2024 15:16"),
    skills: ["html", "css"],
  },
  {
    id: 9,
    name: "Huddle section",
    link: "/huddle-section",
    pic: pic9,
    dateStart: handleDate("12/03/2024"),
    from: handleFrom("12/03/2024 14:20"),
    date: handleDate("12/03/2024"),
    days: handleTime("12/03/2024 14:20", "12/03/2024 15:15"),
    skills: ["html", "css"],
  },
  {
    id: 10,
    name: "Age calculator",
    link: "/age-calculator",
    pic: pic10,
    dateStart: handleDate("12/03/2024"),
    from: handleFrom("12/03/2024 23:00"),
    date: handleDate("12/04/2024"),
    days: handleTime("12/03/2024 23:00", "12/04/2024 22:25"),
    skills: ["html", "css", "js", "react"],
  },
  {
    id: 11,
    name: "Product list",
    link: "/product-list",
    pic: pic11,
    dateStart: handleDate("12/08/2024"),
    from: handleFrom("12/08/2024 13:58"),
    date: handleDate("12/08/2024"),
    days: handleTime("12/08/2024 13:58", "12/08/2024 14:30"),
    skills: ["html", "css", "js", "react"],
  },
];

export default challenges;
