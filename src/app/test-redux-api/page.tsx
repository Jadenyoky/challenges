"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import Card from "./components/card";
import { PersistGate } from "redux-persist/integration/react";

const Page = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <Card />
      </PersistGate>
    </Provider>
  );
};

export default Page;
