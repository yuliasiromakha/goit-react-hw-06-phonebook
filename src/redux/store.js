// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "redux/reducer"; 
import { persistStore } from "redux-persist"; 

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor }; 
