import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// function App() {
//   let rows = 25;
//   let cols = 25;
//   let speed = 100;
//   let intervalId;
//   let initialState = {
//     generation: 0,
//     gameOn: false,
//     gridFull: generateEmptyGrid(rows, cols),
//   };

//   const [state, setState] = useState(initialState);

//   const selectBox = (row, col) => {
//     if (!state.gameOn) {
//       let gridCopy = arrayClone(state.gridFull);
//       gridCopy[row][col] = !gridCopy[row][col];
//       setState({
//         ...state,
//         gridFull: gridCopy,
//       });
//     }
//   };

//   const seed = () => {
//     let gridCopy = arrayClone(state.gridFull);
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         if (Math.floor(Math.random() * 4) === 1) {
//           gridCopy[i][j] = true;
//         }
//       }
//     }
//     setState({
//       ...state,
//       gridFull: gridCopy,
//     });
//   };

//   const playButton = () => {
//     clearInterval(intervalId);
//     intervalId = setInterval(play, speed);
//   };

//   const pauseButton = () => {
//     clearInterval(intervalId);
//   };

//   const slow = () => {
//     speed = 1000;
//     playButton();
//   };

//   const fast = () => {
//     speed = 100;
//     playButton();
//   };

//   const clear = () => {
//     setState(initialState);
//     clearInterval(intervalId);
//   };

//   const gridSize = (size) => {
//     switch (size) {
//       case "1":
//         cols = 20;
//         rows = 10;
//         break;
//       case "2":
//         cols = 50;
//         rows = 30;
//         break;
//       default:
//         cols = 70;
//         rows = 50;
//     }
//     clear();
//   };

//   const play = () => {
//     let g = state.gridFull;
//     let g2 = arrayClone(state.gridFull);

//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         let count = 0;
//         if (i > 0) if (g[i - 1][j]) count++;
//         if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
//         if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
//         if (j < cols - 1) if (g[i][j + 1]) count++;
//         if (j > 0) if (g[i][j - 1]) count++;
//         if (i < rows - 1) if (g[i + 1][j]) count++;
//         if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
//         if (i < rows - 1 && cols - 1) if (g[i + 1][j + 1]) count++;
//         if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
//         if (!g[i][j] && count === 3) g2[i][j] = true;
//       }
//     }
//     setState({
//       ...state,
//       gridFull: g2,
//       gameOn: true,
//       generation: state.generation + 1,
//     });
//   };

//   return (
//     <div>
//       <h1>The Game of Life</h1>

//       <Grid
//         gridFull={state.gridFull}
//         rows={rows}
//         cols={cols}
//         gameOn={state.gameOn}
//         selectBox={selectBox}
//       />
//       <br />
//       <Buttons
//         playButton={playButton}
//         pauseButton={pauseButton}
//         fast={fast}
//         clear={clear}
//         slow={slow}
//         seed={seed}
//         gridSize={gridSize}
//       />
//       <h2>Generations: {state.generation}</h2>
//     </div>
//   );
// }