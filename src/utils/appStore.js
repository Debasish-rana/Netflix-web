// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice"
import searchMovieReducer from "./searchMovieSlice"

 const appStore = configureStore({
  reducer: {
    user:userReducer,
    movies:moviesReducer,
    gpt:gptReducer,
    language:languageReducer,
    searchMovie:searchMovieReducer
  },
});

export default appStore;
