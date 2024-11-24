"use client";
import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import pic1 from "../../assets/images/recipe-page/image-omelette.jpeg";

const Page = () => {
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
              <li className={Styles.item}>
                <b>Total: </b>
                Approximately 10 minutes
              </li>
              <li className={Styles.item}>
                <b>Preparation: </b> 5 minutes
              </li>
              <li className={Styles.item}>
                <b>Cooking: </b> 5 minutes
              </li>
            </ul>
          </div>

          <div className={Styles.ingredients}>
            <p className={Styles.title}>Ingredients</p>
            <ul className={Styles.list}>
              <li className={Styles.item}>2-3 large eggs</li>
              <li className={Styles.item}>Salt, to taste</li>

              <li className={Styles.item}>Pepper, to taste</li>
              <li className={Styles.item}>1 tablespoon of butter or oil</li>
              <li className={Styles.item}>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>

          <hr />

          <div className={Styles.Instructions}>
            <p className={Styles.title}>Instructions</p>

            <ol className={Styles.list}>
              <li className={Styles.item}>
                <p>
                  <b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of
                  salt and pepper until they are well mixed. You can add a
                  tablespoon of water or milk for a fluffier texture.
                </p>
              </li>

              <li className={Styles.item}>
                <p>
                  <b>Heat the pan:</b> Place a non-stick frying pan over medium
                  heat and add butter or oil.
                </p>
              </li>
              <li className={Styles.item}>
                <p>
                  <b>Cook the omelette:</b> Once the butter is melted and
                  bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                  evenly coat the surface.
                </p>
              </li>

              <li className={Styles.item}>
                <p>
                  <b>Add fillings (optional):</b> When the eggs begin to set at
                  the edges but are still slightly runny in the middle, sprinkle
                  your chosen fillings over one half of the omelette.
                </p>
              </li>

              <li className={Styles.item}>
                <p>
                  <b>Fold and serve:</b> As the omelette continues to cook,
                  carefully lift one edge and fold it over the fillings. Let it
                  cook for another minute, then slide it onto a plate.
                </p>
              </li>

              <li className={Styles.item}>
                <p>
                  <b>Enjoy:</b> Serve hot, with additional salt and pepper if
                  needed.
                </p>
              </li>
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
              <div className={Styles.item}>
                <span className={Styles.name}>Calories</span>
                <span className={Styles.cal}>277kcal</span>
              </div>
              <hr />

              <div className={Styles.item}>
                <span className={Styles.name}>Carbs</span>
                <span className={Styles.cal}>0g</span>
              </div>
              <hr />

              <div className={Styles.item}>
                <span className={Styles.name}>Protein</span>

                <span className={Styles.cal}>20g</span>
              </div>
              <hr />

              <div className={Styles.item}>
                <span className={Styles.name}>Fat</span>
                <span className={Styles.cal}>22g</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </main>
  );
};

export default Page;
