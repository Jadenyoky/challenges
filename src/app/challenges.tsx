"use client";
import pic1 from "../assets/challenges-images/bento-grid.jpg";
import pic2 from "../assets/challenges-images/social-links.jpg";
import pic3 from "../assets/challenges-images/12.jpg";
import { StaticImageData } from "next/image";

type Challenge = {
  name: string;
  link: string;
  pic: StaticImageData;
};

const challenges: Challenge[] = [
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic1,
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
  },
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic3,
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
  },
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic1,
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic2,
  },
  {
    name: "Bento Grid",
    link: "/bento-grid",
    pic: pic3,
  },
  {
    name: "Social Links",
    link: "/social-links",
    pic: pic3,
  },
];

export default challenges;
