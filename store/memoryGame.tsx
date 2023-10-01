import { createSlice } from "@reduxjs/toolkit";

export const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState: {
    gameStarted: false,
    theme: "",
    numPlayers: null,
    gridSize: "",
    array: [],
  },
  reducers: {
    startGame: (state, action) => {
      state.theme = action.payload.theme;
      state.numPlayers = action.payload.numPlayers;
      state.gridSize = action.payload.gridSize;
      state.gameStarted = true;
    },
  },
});
