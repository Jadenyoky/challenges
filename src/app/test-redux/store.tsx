import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // LocalStorage كمخزن

const config = {
  key: "storageCounter",
  storage,
};

const persisedReducer = persistReducer(config, counterReducer);

export const store = configureStore({
  reducer: {
    counterA: persisedReducer,
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
