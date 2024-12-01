"use client";
import React from "react";
import "./page.css";
import _ from "lodash";

const Page = () => {
  // const boxes = Array.from({ length: 50 }, (_, i) => {
  //   return {
  //     id: i,
  //     width: Math.floor(Math.random() * 500) + 50,
  //     height: Math.floor(Math.random() * 500) + 50,
  //   };
  // });
  return (
    <div className="masonry">
      ss
      {/* {_.orderBy(boxes, "height").map((box, i) => {
        return (
          <div
            key={i}
            className="flex justify-center items-center"
            style={{
              width: `${box.width}px`,
              height: `${box.height}px`,
              border: "1px solid black",
              overflow: "auto",
            }}
          ></div>
        );
      })} */}
    </div>
  );
};

export default Page;
