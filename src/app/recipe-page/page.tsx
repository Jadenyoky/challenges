"use client";
import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import pic1 from "/public/assets/images/recipe-page/image-omelette.jpeg";

const Page = () => {
  const time = [
    {
      bold: "Total:",
      text: "Approximately 10 minutes",
    },
    {
      bold: "Preparation:",
      text: "5 minutes",
    },
    {
      bold: "Cooking:",
      text: "5 minutes",
    },
  ];
  const ingredients = [
    {
      text: "2-3 large eggs",
    },
    {
      text: "Salt, to taste",
    },
    {
      text: "Pepper, to taste",
    },
    {
      text: "1 tablespoon of butter or oil",
    },
    {
      text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    },
  ];
  const Instructions = [
    {
      bold: "Beat the eggs:",
      text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      bold: "Heat the pan:",
      text: "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      bold: "Cook the omelette:",
      text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      bold: "Add fillings (optional):",
      text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      bold: "Fold and serve:",
      text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      bold: "Enjoy:",
      text: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const nutrition = [
    {
      name: "Calories",
      cal: "277kcal",
    },
    {
      name: "Carbs",
      cal: "0g",
    },
    {
      name: "Protein",
      cal: "20g",
    },
    {
      name: "Fat",
      cal: "22g",
    },
  ];

  return (
    <main className={Styles.container}>
      <section className={Styles.card}>
        <div className={Styles.image}>
          <Image className={Styles.image1} src={pic1} alt="qr-code" />
        </div>
        <div className={Styles.inner}>
          <h1 className={Styles.header}>Simple Omelette Recipe</h1>

          <p className={Styles.sub}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className={Styles.time}>
            <p className={Styles.title}>Preparation time</p>

            <ul className={Styles.list}>
              {time.map((item, index) => {
                return (
                  <li key={index} className={Styles.item}>
                    <b>{item.bold}</b> {item.text}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Styles.ingredients}>
            <p className={Styles.title}>Ingredients</p>
            <ul className={Styles.list}>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className={Styles.item}>
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>

          <hr />

          <div className={Styles.Instructions}>
            <p className={Styles.title}>Instructions</p>

            <ol className={Styles.list}>
              {Instructions.map((item, index) => {
                return (
                  <li key={index} className={Styles.item}>
                    <p>
                      <b>{item.bold}</b> {item.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          <hr />

          <div className={Styles.nutrition}>
            <p className={Styles.title}>Nutrition</p>

            <p className={Styles.sub}>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <div className={Styles.table}>
              {nutrition.map((item, index) => {
                const lastItem = nutrition.length - 1;
                return (
                  <div key={index}>
                    <div className={Styles.item}>
                      <span className={Styles.name}>{item.name}</span>
                      <span className={Styles.cal}>{item.cal}</span>
                    </div>
                    {index !== lastItem && <hr />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <br />
    </main>
  );
};

export default Page;
