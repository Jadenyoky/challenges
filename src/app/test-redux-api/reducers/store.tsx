import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Lo

const config = {
  key: "storageCounter",
  storage,
};

const persisedReducer = persistReducer(config, dataSlice);

export const store = configureStore({
  reducer: {
    dataS: persisedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // تجاهل تحقق القيم غير القابلة للتسلسل في redux-persist
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
