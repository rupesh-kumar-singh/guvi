import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
const Counter = () => {
  let [likes, setlikes] = useState(0);
  let [dislikes, setdislikes] = useState(0);

  function like() {
    likes = likes + 1;
    setlikes(likes);
    console.log(likes);
  }
  function dislike() {
    setdislikes(dislikes + 1);
  }

  const likestyle = {
    marginTop: "10px",
    fontSize: "20px",
    color: likes >= 10 ? "red" : "green",
  };

  const dislikestyle = {
    marginTop: "10px",
    fontSize: "20px",
    color: likes - dislikes > 10 ? "blue" : "black",
  };

  const massage = {
    display: likes - dislikes >= 10 ? "none" : "block",
  };
  return (
    <div>
      {likes - dislikes >= 10 ? <h4> awesome ❤️❤️</h4> : null}
      <div className="counter">
        <IconButton aria-label="like" onClick={like} style={likestyle}>
          <Badge badgeContent={likes} color="primary">
            👍
          </Badge>
        </IconButton>

        <IconButton aria-label="dislike" style={dislikestyle} onClick={dislike}>
          <Badge badgeContent={dislikes} color="error">
            👎
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};
export default Counter;
