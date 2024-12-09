import React, {  useRef } from "react";
import { API_OPTION, bgImage } from "../utils/Constants";
import lang from "../utils/langConstant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo } from "../utils/searchMovieSlice";
import GptSuggetation from "./GptSuggetation";

const GptSearchBar = () => {
  const inputText = useRef(null);
  const dispatch = useDispatch()
  const languageKey = useSelector((store) => store.language.lang);
  const handleclickGptSearch = async () => {
    //console.log(inputText.current.value);
    const gptQuery = inputText.current.value;
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          gptQuery +
          "&include_adult=false&language=en-US&page=1",
        API_OPTION
      );
      const json = await data.json();
      //console.log(json);
   dispatch(addMovieVideo(json))
 
  };
  return (
    <div
      className="flex justify-center"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <img className="h-screen md:w-screen object-cover" src={bgImage} alt="" />
      <form className="bg-black p-8 w-[355px] md:w-[600px] absolute m-44 md:m-[15%]">
        <div>
          <input
            ref={inputText}
            className="p-2 w-40 md:w-80 focus:outline-none"
            type="text"
            placeholder={lang[languageKey].gptSearchPlaceholder}
          />
          <button
            className="bg-red-700 p-2.5 w-24 md:w-36 text-white mx-4 md:mx-9"
            onClick={handleclickGptSearch}
          >
            {lang[languageKey].search}
          </button>
        </div>
      </form>
      <GptSuggetation />
    </div>
  );
};

export default GptSearchBar;
