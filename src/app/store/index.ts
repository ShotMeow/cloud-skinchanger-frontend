import { configureStore } from "@reduxjs/toolkit";
import { tariffReducer } from "@/entities/tariff";

const reducer = {
  tariff: tariffReducer,
};

export const store = configureStore({
  reducer,
});
