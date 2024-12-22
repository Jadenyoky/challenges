"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import Counter from "./counter";
import { PersistGate } from "redux-persist/integration/react";
import _ from "lodash";

const Page = () => {
  const arr = [1, 2, 3, 4, 5, "ahmed", "Ahmed"];
  const arr2 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    "ahmed",
    true,
    "Ahmed",
    "mOhamed",
    "ahmeD",
  ];

  const diff1 = _.difference(arr, arr2);
  const diff2 = _.difference(arr2, arr);

  console.log([...diff1, ...diff2]);

  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <main className="h-screen bg-orange-400 flex flex-wrap justify-center items-center">
          <Counter />
        </main>
      </PersistGate>
    </Provider>
  );
};

export default Page;
