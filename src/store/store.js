import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false, // check https://redux-toolkit.js.org/api/immutabilityMiddleware
    }).concat([process.env.NODE_ENV === 'development' && logger].filter(Boolean)),
});

export default store;

export const persistor = persistStore(store);
