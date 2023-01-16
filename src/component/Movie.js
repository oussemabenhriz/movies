import React from "react";
import { Button } from "react-bootstrap";
import "./Movie.css";

const Movie = ({ arr, location, history }) => {
  const id = +location.pathname.split("")[1];

  return (
    <div className="MoviePage">
      <h2>{arr[id - 1].Name}</h2>

      <iframe
        width="853"
        height="480"
        src={arr[id - 1].video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="desciption">{arr[id - 1].description}</p>

      <Button variant="secondary" onClick={() => history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default Movie;