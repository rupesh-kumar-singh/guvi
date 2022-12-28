import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Addmovie = ({ movielist, setmovielist }) => {
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState();
  const [summary, setsummary] = useState("");

  const outputdata = () => {
    const newmovie = {
      name: name,
      poster: poster,
      rating: +rating,
      summary: summary,
    };
    setmovielist([...movielist, newmovie]);
    // console.log(movielist);
  };

  const fillmovie = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <form onSubmit={fillmovie} className="input_field">
          <TextField
            className="text"
            onChange={(event) => {
              setname(event.target.value);
            }}
            required
            label="Name"
            variant="outlined"
          />

          <TextField
            required
            className="text"
            onChange={(event) => {
              setposter(event.target.value);
            }}
            label="url"
            variant="outlined"
          />

          <TextField
            className="text"
            type="number"
            required
            onChange={(event) => {
              setrating(event.target.value);
            }}
            label="Rating"
            variant="outlined"
          />

          <TextField
            required
            className="text"
            onChange={(event) => {
              setsummary(event.target.value);
            }}
            label="Summary"
            variant="outlined"
          />

          <Button className="text" onClick={outputdata} variant="contained">
            Add movie
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
