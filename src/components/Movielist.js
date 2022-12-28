import React from "react";
import Movies from "./Movies";

const Movielist = ({ movielist, setmovielist }) => {
  return (
    <div>
      <div className="mivielist">
        {movielist.map((data, index) => (
          <Movies key={index} out={data} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
