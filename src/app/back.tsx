"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Back = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <main
      className="back"
      onClick={() => {
        handleBack();
      }}
    >
      <i className="fi fi-rr-angle-small-left"></i>
    </main>
  );
};

export default Back;
