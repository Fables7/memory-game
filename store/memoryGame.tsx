import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IconDefinition,
  faFutbol,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAnchor,
  faFlask,
  faSun,
  faHandSpock,
  faBug,
  faSnowflake,
  faTurkishLiraSign,
  faCar,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTiktok,
  faYoutube,
  faDiscord,
  faApple,
  faGoogle,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const iconArrays = [
  faFutbol,
  faMoon,
  faAnchor,
  faFlask,
  faSun,
  faHandSpock,
  faBug,
  faSnowflake,
  faTurkishLiraSign,
  faCar,
  faGithub,
  faTiktok,
  faYoutube,
  faDiscord,
  faApple,
  faGoogle,
  faWindows,
  faBolt,
  faAndroid,
];

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
  },
});

export const { startGame } = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
