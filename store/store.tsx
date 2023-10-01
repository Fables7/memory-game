import { configureStore } from "@reduxjs/toolkit";
import memoryGameReducer from "./memoryGame";

export const store = configureStore({
  reducer: {
    memoryGame: memoryGameReducer,
  },
});
