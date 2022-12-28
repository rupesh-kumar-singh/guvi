import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
const Moviedetail = ({ movielist }) => {
  const { id } = useParams();
  console.log(useParams);

  const navigate = useNavigate();
  const data = movielist[id];
  return (
    <div>
      <iframe
        width="100%"
        height="360"
        src={data.trailer}
        title="RRR Official Trailer (Hindi) India’s Biggest Action Drama | NTR,RamCharan,AjayD,AliaB | SS Rajamouli"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie_container">
        <div className="main_list">
          <h2>{data.name}</h2>
          <h3>⭐⭐{data.rating}</h3>
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
