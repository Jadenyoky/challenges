"use client";
import React, { useState } from "react";
import Styles from "./landing.module.css";
import Image from "next/image";
import logo from "../../assets/images/easybank-landing/logo.svg";
import menuIcon from "../../assets/images/easybank-landing/icon-hamburger.svg";
import closeIcon from "../../assets/images/easybank-landing/icon-close.svg";
import introDesktop from "../../assets/images/easybank-landing/bg-intro-desktop.svg";
import mockups from "../../assets/images/easybank-landing/image-mockups.png";
import introMobile from "../../assets/images/easybank-landing/bg-intro-mobile.svg";
import card1 from "../../assets/images/easybank-landing/icon-online.svg";
import card2 from "../../assets/images/easybank-landing/icon-budgeting.svg";
import card3 from "../../assets/images/easybank-landing/icon-onboarding.svg";
import card4 from "../../assets/images/easybank-landing/icon-api.svg";

const Page = () => {
  const [navMobile, setnavMobile] = useState<boolean>(false);
  const handleMenu = () => {
    setnavMobile(!navMobile);
  };

  const cards = [
    {
      pic: card1,
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      pic: card2,
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      pic: card3,
      title: "Fast Onboarding",
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      pic: card4,
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <main className={Styles.page}>
      <nav className={Styles.nav}>
        <div className={Styles.desktop}>
          <Image className={Styles.logo} src={logo} alt="logo" />
          <div className={Styles.links}>
            <p className={Styles.title}>Home</p>
            <p className={Styles.title}>About</p>
            <p className={Styles.title}>Contact</p>
            <p className={Styles.title}>Blog</p>
            <p className={Styles.title}>Careers</p>
          </div>
          <button className={Styles.button}>Request Invite</button>
        </div>
        <div className={Styles.mobile}>
          <Image className={Styles.logo} src={logo} alt="logo" />
          {navMobile ? (
            <Image
              onClick={() => handleMenu()}
              className={Styles.closeIcon}
              src={closeIcon}
              alt="close-icon"
            />
          ) : (
            <Image
              onClick={() => handleMenu()}
              className={Styles.menuIcon}
              src={menuIcon}
              alt="menu-icon"
            />
          )}
          {navMobile && (
            <div onClick={() => handleMenu()} className={Styles.highlight} />
          )}
          {navMobile && (
            <div className={Styles.mobileLinks}>
              <p className={Styles.title}>Home</p>
              <p className={Styles.title}>About</p>
              <p className={Styles.title}>Contact</p>
              <p className={Styles.title}>Blog</p>
              <p className={Styles.title}>Careers</p>
            </div>
          )}
        </div>
      </nav>

      <section className={Styles.sectionOne}>
        <div className={Styles.partOne}>
          <p className={Styles.title}>Next generation digital banking</p>
          <p className={Styles.sub}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className={Styles.button}>Request Invite</button>
        </div>

        <div className={Styles.partTwo}>
          <Image
            className={Styles.image1}
            src={introDesktop}
            alt="introDesktop"
          />
          <Image
            className={Styles.image3}
            src={introMobile}
            alt="introMobile"
          />
          <Image className={Styles.image2} src={mockups} alt="mockups" />
        </div>
      </section>

      <section className={Styles.sectionTwo}>
        <div className={Styles.partOne}>
          <h1 className={Styles.title}>Why choose Easybank?</h1>
          <p className={Styles.sub}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className={Styles.partTwo}>
          {cards.map((card, index) => {
            return (
              <div className={Styles.card} key={index}>
                <Image className={Styles.image} src={card.pic} alt="logo" />
                <p className={Styles.title}>{card.title}</p>
                <p className={Styles.text}>{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Page;
