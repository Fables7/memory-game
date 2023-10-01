import { createSlice } from "@reduxjs/toolkit";
import { faFutbol, faMoon } from "@fortawesome/free-regular-svg-icons";
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
      const shuffleCards = () => {
        if (state.theme === "Numbers") {
          if (state.gridSize === "4x4") {
            const shuffledCards = [...iconArrays];
          }
        }
        const shuffledCards = [...iconArrays];
      };
      state.theme = action.payload.theme;
      state.numPlayers = action.payload.numPlayers;
      state.gridSize = action.payload.gridSize;
      state.gameStarted = true;
    },
  },
});
