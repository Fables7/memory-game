import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MemoryGameState {
  gameStarted: boolean;
  theme: string;
  numPlayers: number;
  gridSize: string;
}

interface StartGamePayload {
  theme: string;
  numPlayers: number;
  gridSize: string;
  startGame: boolean;
}

export const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState: {
    gameStarted: false,
    theme: "",
    numPlayers: 1,
    gridSize: "",
  } as MemoryGameState,
  reducers: {
    startGame: (state, action: PayloadAction<StartGamePayload>) => {
      state.theme = action.payload.theme;
      state.numPlayers = action.payload.numPlayers;
      state.gridSize = action.payload.gridSize;
      state.gameStarted = true;
    },
    endGame: (state) => {},
    newGame: (state) => {
      state.gameStarted = false;
      state.theme = "";
      state.numPlayers = 1;
      state.gridSize = "";
    },
  },
});

export const { startGame, newGame } = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
