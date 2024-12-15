"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import Counter from "./counter";
import { PersistGate } from "redux-persist/integration/react";

const Page = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <main className="h-screen bg-orange-400 flex justify-center items-center">
          <Counter />
        </main>
      </PersistGate>
    </Provider>
  );
};

export default Page;
