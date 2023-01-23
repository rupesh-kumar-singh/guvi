import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movies from "./Movies";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
const Movielist = () => {
  const navigate = useNavigate();
  const [movielist, setmovielist] = useState([]);
  // console.log(movielist);
  const getdata = () => {
    fetch("https://6364a4ce8a3337d9a2fb22b2.mockapi.io/posts")
      .then((out) => out.json())
      .then((res) => setmovielist(res));
  };

  useEffect(() => {
    getdata();
  }, []);

  const deletefun = (data) => {
    console.log("deleted.....", data);

    fetch(`https://6364a4ce8a3337d9a2fb22b2.mockapi.io/posts/${data}`, {
      method: "DELETE",
    }).then(() => getdata());
  };
  return (
    <div>
      <div className="mivielist">
        {movielist.map((data, index) => (
          <Movies
            key={index}
            data={data}
            id={data.id}
            deletebutton={
              <IconButton
                color={"error"}
                onClick={() => deletefun(data.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton
                color={"secondary"}
                onClick={() => navigate(`/movies/edit/${data.id}`)}
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
