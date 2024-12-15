"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus, reset, count2 } from "./slice";

const Counter = () => {
  const current = useSelector((state: any) => state.counterA.count);
  const changer = useDispatch();

  const current2 = useSelector((state: any) => state.counterA.count2);

  return (
    <div className="w-[500px] max-w-[90%] bg-white p-8 rounded-xl flex flex-col items-start gap-4">
      <h1 className="bg-black text-yellow-300 font-bold p-[10px_20px] rounded-[50px]">
        Counter: {current}
      </h1>
      <h1 className="bg-black text-yellow-300 font-bold p-[10px_20px] rounded-[50px]">
        Counter: {current2}
      </h1>
      <button
        onClick={() => {
          changer(plus());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          changer(minus());
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          changer(reset());
        }}
      >
        Reset To Zero
      </button>
      <button
        onClick={() => {
          changer(count2());
        }}
      >
        Increase Counter 2
      </button>
    </div>
  );
};

export default Counter;
