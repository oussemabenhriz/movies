import React from "react";

import MovieCard from "./MovieCard";
import Modale from "./Modal";
import "./MovieList.css";

const MovieList = ({ rate, inputText,arr ,setArr }) => {


  return (
    <div className="background">
      {arr
        .filter(
          (movie) =>
            movie.Name.toUpperCase().includes(inputText.toUpperCase()) &&
            movie.rate >= rate
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}

      {/* <div className="addBtn"><h2 onClick={handelClick}>[+]</h2></div>       */}
      <Modale setArr={setArr} arr={arr} />
    </div>
  );
};

export default MovieList;