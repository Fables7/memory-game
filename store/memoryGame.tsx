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
  array: (IconDefinition | number)[];
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
    array: [],
  } as MemoryGameState,
  reducers: {
    startGame: (state, action: PayloadAction<StartGamePayload>) => {
      const shuffleCards = () => {
        switch (action.payload.theme) {
          case "Numbers":
            if (action.payload.gridSize === "4x4") {
              const array = new Array(8).fill(0).map((_, i) => i + 1);
              const shuffledCards = [...array, ...array];

              return shuffledCards;
            }
            if (action.payload.gridSize === "6x6") {
              const array = new Array(18).fill(0).map((_, i) => i + 1);
              const shuffledCards = [...array, ...array];
              return shuffledCards;
            }
          case "Icons":
            if (action.payload.gridSize === "4x4") {
              const array = iconArrays.slice(0, 8);
              const shuffledCards = [...array, ...array];
              return shuffledCards;
            }
            if (action.payload.gridSize === "6x6") {
              const array = iconArrays.slice(0, 18);
              const shuffledCards = [...array, ...array];
              return shuffledCards;
            }
        }
      };
      state.theme = action.payload.theme;
      state.numPlayers = action.payload.numPlayers;
      state.gridSize = action.payload.gridSize;
      state.gameStarted = true;
      state.array = shuffleCards() || [];
    },
  },
});

export const { startGame } = memoryGameSlice.actions;

export default memoryGameSlice.reducer;
