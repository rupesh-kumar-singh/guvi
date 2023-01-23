import React, { useState } from "react";

export const Addcolor = () => {
  const [color, setcolor] = useState(["pink"]);

  const [colorlist, setcolorlist] = useState(["pink", "yellow", "blue"]);

  const main = {
    backgroundColor: color,
  };

  return (
    <div>
      <input
        style={main}
        placeholder="color"
        onChange={(event) => {
          console.log(setcolor(event.target.value));
        }}
      />
      <button onClick={() => setcolorlist([...colorlist, color])}>
        button
      </button>

      {colorlist.map((e, i) => (
        <Cololist key={i} color={e} />
      ))}
    </div>
  );
};

function Cololist({ color }) {
  return (
    <div>
      {
        <h1
          style={{
            width: "330px",
            height: "110px",
            backgroundColor: `${color}`,
          }}
        ></h1>
      }
    </div>
  );
}
