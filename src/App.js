import React, { useState } from "react";
import Grid from "./components/Grid";
import { arrayClone, generateEmptyGrid } from "./utils";
import "./App.css";

function App() {
  let rows = 30;
  let cols = 50;
  let speed = 100;

  const [state, setState] = useState({
    generation: 0,
    gameOn: false,
    gridFull: generateEmptyGrid(rows, cols),
  });

  return (
    <div>
      <h1>The Game of Life</h1>

      <Grid
        gridFull={state.gridFull}
        rows={rows}
        cols={cols}
        gameOn={state.gameOn}
      />
      <h2>Generations: {state.generation}</h2>
    </div>
  );
}

export default App;
