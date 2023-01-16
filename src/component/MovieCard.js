import React ,{useState} from "react";
import "./MovieCard";
import { Link } from 'react-router-dom'
// , { useState }

import { Rate } from "antd";
import './MovieCard.css'
const MovieCard = ({ movie }) => {
  const [show, setShow] = useState(false)
  const handleShow = () =>{ setShow(true)  } 
  const handlUnshow = () => {setShow(false)}
  return (
      <Link to={/${movie.id}}>
    <div className="Background" onMouseOver={handleShow} onMouseLeave={handlUnshow} > 
      <img src={movie.Img} alt="moviePic" className="pic" />
      { show && <div className="dess">
      <Rate disabled value={movie.rate} />
      <h2 className="name">{movie.Name}</h2>
      </div>}
    </div>
      </Link>
  );
};

export default MovieCard;