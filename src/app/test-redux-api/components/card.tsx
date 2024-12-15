"use client";
import React from "react";
import { fetchData2 } from "../reducers/slice";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const { status, data, error } = useSelector((state: any) => state.dataS);
  const changer = useDispatch();

  return (
    <div className="h-svh flex flex-col justify-center items-center gap-5 bg-lime-400">
      <button
        onClick={() => {
          changer(fetchData2());
        }}
      >
        Fetch
      </button>
      card 2 --------
      {status === "done" ? (
        data.map((item: any) => <div key={item.id}>{item.title}</div>)
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default Card;
