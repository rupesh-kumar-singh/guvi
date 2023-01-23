import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
const Moviedetail = () => {
  const [movie, setmovie] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  const data = movie;
  // console.log(movie);
  useEffect(() => {
    fetch(`https://6364a4ce8a3337d9a2fb22b2.mockapi.io/posts/${id}`)
      .then((out) => out.json())
      .then((res) => setmovie(res));
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="360"
        src={data.trailer}
        title="RRR Official Trailer (Hindi) India’s Biggest Action Drama | NTR,RamCharan,AjayD,AliaB | SS Rajamouli"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="movie_container">
        <div className="main_list">
          <h2>{data.name}</h2>
          <h3>⭐{data.rating}</h3>
        </div>
        <h4>{data.summary}</h4>
        <IconButton
          aria-label="toggle"
          color="primary"
          onClick={() => navigate(-1)}
        >
          <Button variant="contained">
            {" "}
            <ArrowBackIcon />
            Back
          </Button>
        </IconButton>
      </div>
    </div>
  );
};

export default Moviedetail;
