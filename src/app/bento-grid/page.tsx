"use client";
import React from "react";
import Styles from "./bento.module.css";
import Image from "next/image";
import pic1 from "../../assets/images/bento-grid/01- create.webp";
import pic2 from "../../assets/images/bento-grid/02- social.webp";
import pic3 from "../../assets/images/bento-grid/03- shedule.webp";
import pic4 from "../../assets/images/bento-grid/04- write.webp";
import pic5 from "../../assets/images/bento-grid/05- manage.webp";
import pic6 from "../../assets/images/bento-grid/06- maintain.webp";
import pic7 from "../../assets/images/bento-grid/07- faster.webp";
import pic8 from "../../assets/images/bento-grid/08- grow.webp";

const Page = () => {
  return (
    <div>
      <section className={`${Styles.container}`}>
        <div className={`${Styles.card} ${Styles.card_1}`}>
          <p className={`${Styles.text_1}`}>
            Create and schedule content <br />
            <span className={`${Styles.plus}`}>quicker.</span>
          </p>
          <Image className={`${Styles.image1}`} src={pic1} alt="one" />
        </div>

        <div className={`${Styles.card} ${Styles.card_2}`}>
          <p className={`${Styles.text_1}`}>
            Social Media <span className={`${Styles.plus}`}>10x</span>
            <br />
            <em>Faster</em> with AI
          </p>
          <div className={`${Styles.text_2}`}>
            <Image className={`${Styles.image1}`} src={pic2} alt="two" />
            <p>Over 4,000 5-star reviews</p>
          </div>
        </div>

        <div className={`${Styles.card} ${Styles.card_3}`}>
          <p className={`${Styles.text_1}`}>Schedule to social media.</p>
          <div className={`${Styles.image}`}>
            <Image className={`${Styles.image1}`} src={pic3} alt="three" />
          </div>
          <p className={`${Styles.text_2}`}>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>

        <div className={`${Styles.card} ${Styles.card_4}`}>
          <p className={`${Styles.text_1}`}>Write your content using AI.</p>
          <Image className={`${Styles.image1}`} src={pic4} alt="four" />
        </div>

        <div className={`${Styles.card} ${Styles.card_5}`}>
          <div className={`${Styles.image}`}>
            <Image className={`${Styles.image1}`} src={pic5} alt="five" />
          </div>
          <p className={`${Styles.text_1}`}>
            Manage multiple accounts and platforms.
          </p>
        </div>

        <div className={`${Styles.card} ${Styles.card_6}`}>
          <p className={`${Styles.text_1}`}>
            Maintain a consistent posting schedule.
          </p>
          <Image className={`${Styles.image1}`} src={pic6} alt="six" />
        </div>

        <div className={`${Styles.card} ${Styles.card_7}`}>
          <p className={`${Styles.text_1}`}>
            <span className={`${Styles.plus}`}>{">56%"}</span> faster audience
            growth
          </p>
          <Image className={`${Styles.image1}`} src={pic7} alt="seven" />
        </div>

        <div className={`${Styles.card} ${Styles.card_8}`}>
          <Image className={`${Styles.image1}`} src={pic8} alt="eight" />
          <p className={`${Styles.text_1}`}>
            Grow followers with non-stop content.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
