import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "movieVideo",
  initialState: {
    addMovieVideo: null,
  },
  reducers: {
    addMovieVideo: (state, action) => {
         state.addMovieVideo = action.payload           
    },
  },
});

export const { addMovieVideo } = searchMovieSlice.actions
export default searchMovieSlice.reducer