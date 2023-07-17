import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducer";

const rootReducer = {
  contacts: contactReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
