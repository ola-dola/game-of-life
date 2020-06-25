import React from "react";
import Grid from "./components/Grid";
import Buttons from "./components/Buttons";
import { arrayClone } from "./utils";
import "./App.css";

// Why was setInterval not working as it should with functional components?
// I need to figure that one out. The functional component code lives as a comment underneath index.js

class App extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gameOn: false,
      gridFull: this.generateEmptyGrid(),
    };
  }

  generateEmptyGrid = () => {
    return Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));
  };

  selectBox = (row, col) => {
    if (!this.state.gameOn) {
      let gridCopy = arrayClone(this.state.gridFull);
      gridCopy[row][col] = !gridCopy[row][col];
      this.setState({
        gridFull: gridCopy,
      });
    }
  };

  pickShape = (shape) => {
    this.clear();

    let newGrid = arrayClone(this.state.gridFull);
    const callback = (box) => {
      box.y.forEach((z) => {
        newGrid[box.x][z] = true;
      });
    };
    switch (shape) {
      case "1": // Glider
        let glider = [
          { x: 8, y: [9] },
          { x: 9, y: [10] },
          { x: 10, y: [8, 9, 10] },
        ];
        glider.forEach(callback);

        this.setState({
          gridFull: newGrid,
        });
        break;
      case "2":
        let exploder = [
          { x: 8, y: [19, 21, 23] },
          { x: 9, y: [19, 23] },
          { x: 10, y: [19, 23] },
          { x: 11, y: [19, 23] },
          { x: 12, y: [19, 21, 23] },
        ];

        exploder.forEach(callback);

        this.setState({
          gridFull: newGrid,
        });
        break;
      case "3":
        let tenCellRow = [
          { x: 15, y: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
        ];

        tenCellRow.forEach(callback);
        this.setState({
          gridFull: newGrid,
        });
        break;
      case "4":
        let tumbler = [
          { x: 9, y: [20, 21, 23, 24] },
          { x: 10, y: [20, 21, 23, 24] },
          { x: 11, y: [21, 23] },
          { x: 12, y: [19, 21, 23, 25] },
          { x: 13, y: [19, 21, 23, 25] },
          { x: 14, y: [19, 20, 24, 25] },
        ];

        tumbler.forEach(callback);
        this.setState({
          gridFull: newGrid,
        });
        break;
      case "5":
        let spaceship = [
          { x: 11, y: [26, 27, 28, 29] },
          { x: 12, y: [25, 29] },
          { x: 13, y: [29] },
          { x: 14, y: [25, 28] },
        ];
        spaceship.forEach(callback);
        this.setState({
          gridFull: newGrid,
        });
        break;
      default:
        return this.clear()
    }
  };
  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy,
    });
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.speed = 1000;
    this.playButton();
  };

  fast = () => {
    this.speed = 100;
    this.playButton();
  };

  clear = () => {
    let grid = this.generateEmptyGrid();
    this.setState({
      gridFull: grid,
      gameOn: false,
      generation: 0,
    });
    clearInterval(this.intervalId);
  };

  gridSize = (size) => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;
    }
    this.clear();
  };

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      gridFull: g2,
      gameOn: true,
      generation: this.state.generation + 1,
    });
  };

  // componentDidMount() {
  //   this.seed();
  //   this.playButton();
  // }

  render() {
    return (
      <div>
        <h1>The Game of Life</h1>

        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
          gameOn={this.state.gameOn}
        />
        <br />
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          fast={this.fast}
          clear={this.clear}
          slow={this.slow}
          seed={this.seed}
          gridSize={this.gridSize}
          pickShape={this.pickShape}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

export default App;
