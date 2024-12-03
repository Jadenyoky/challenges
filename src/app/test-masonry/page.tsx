"use client";
import React, { useState } from "react";
import "./page.css";
import _ from "lodash";
import Image from "next/image";
import pic1 from "/public/assets/images/landscape.jpg";
import pic2 from "/public/assets/images/squre.jpg";
import Masonry from "react-masonry-css";
import axios from "axios";

interface Photo {
  src: {
    original: string;
  };
}
const Page = () => {
  const key = "F8O6Z1e51u38SIiIgGCfmtpTSd7V9JOigOIKjrvEwF06CoLOBgO8ThHl";
  const url = "https://api.pexels.com/v1/search";
  const [photos, setphotos] = useState<Photo[]>([]);
  const fetchData = async () => {
    const response = await axios.get(url, {
      headers: {
        Authorization: key,
      },
      params: {
        query: "landscape",
        per_page: 20,
      },
    });

    console.log(response.data);
    setphotos(response.data.photos);
  };

  const shuffle = () => {
    setphotos(_.shuffle(photos));
  };

  return (
    <div className="masonry">
      <button onClick={() => fetchData()}>Load More</button>
      <button onClick={() => shuffle()}>Load More shuffle</button>
      <Masonry
        className="my-masonry-grid"
        breakpointCols={{ default: 1, 1100: 3, 700: 2, 500: 1 }}
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, index) => {
          return (
            <img
              src={photo.src.original}
              key={index}
              width={200}
              height={200}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default Page;
