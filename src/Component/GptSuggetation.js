import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/Constants";

const GptSuggetation = () => {
  const movieData = useSelector((store) => store.searchMovie.addMovieVideo);
  console.log(movieData);

  return (
    movieData && (
      <>
        {movieData.results.length === 0 ? (
          alert("Something went wrong pleace enter a valid name")
        ) : (
          <div className="bg-black p-8 m-6 w-screen absolute z-20 text-white flex flex-nowrap overflow-x-scroll  scrollbar-hide md:top-96 top-72 opacity-90">
            {movieData.results.map((movie) => (
              <div key={movie.id} className="mx-2 ">
                <div className="w-32 md:w-52 h-48 md:h-80  md:p-5">
                  <img
                    className="w-36 md:w-48 h-28 md:h-56 md:pl-2 "
                    src={CDN_URL + movie.poster_path}
                    alt="movie"
                  />
                  <div className="p-3 flex justify-center">{movie.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    )
  );
};

export default GptSuggetation;
