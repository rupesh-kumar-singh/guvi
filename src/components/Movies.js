import React, { useState } from "react";

import Counter from "./Counter";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import InfoIcon from "@mui/icons-material/Info";

import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Movies = ({ data, id, deletebutton, editbutton }) => {
  const [show, setshow] = useState(true);

  const navigate = useNavigate();
  return (
    <Card className="main_container">
      <img className="img" src={data.poster} alt="mivie" />
      <CardContent>
        <div className="components">
          <h2 className="icon">{data.name}</h2>
          <span>
            <IconButton
              aria-label="toggle"
              color="primary"
              onClick={() => setshow(!show)}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </span>
          <span>
            <IconButton
              aria-label="toggle"
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
            >
              <InfoIcon />
            </IconButton>
          </span>
        </div>
        {show ? <h6>{data.summary}</h6> : null}
        <h3 style={{ color: data.rating > 7 ? "green" : "red" }}>
          ⭐{data.rating}
        </h3>
      </CardContent>

      <CardActions className="cardaction">
        <Counter />
        {deletebutton}
        {editbutton}
      </CardActions>
    </Card>
  );
};

export default Movies;
