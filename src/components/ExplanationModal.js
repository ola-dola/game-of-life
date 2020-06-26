import React from "react";
import { Modal, Button } from "react-bootstrap";

function Explanation(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          John Conway’s Game of Life
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ color: "black" }}>The Game</h4>
        <p>
          The Game of Life is not your typical computer game. It is a cellular
          automaton, and was invented by Cambridge mathematician John Conway.
          This game became widely known when it was mentioned in an article
          published by Scientific American in 1970. It consists of a collection
          of cells which, based on a few mathematical rules, can live, die or
          multiply. Depending on the initial conditions, the cells form various
          patterns throughout the course of the game.
        </p>

        <h4 style={{ color: "black" }}>The Rules</h4>
        <p>
          <strong>For a space that is populated:</strong> <br />
             <li>Each cell with one or no neighbors dies, as if by solitude. </li>
             <li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
             <li> Each cell with two or three neighbors survives.</li>
          <strong> For a space that is empty or unpopulated </strong>
            <li> Each cell with three neighbors becomes populated.</li>
        </p>

        <h4 style={{ color: "black" }}>Game Control</h4>
        <p>
           - You can <strong>seed</strong> the board to generate random life to start with, then click play. <br/>
           - You can also select predefined <strong>shapes</strong> from the dropdown menu, or click the board to make  your own shape form. <br />
           - <strong>Fast</strong> and <strong>Slow</strong> buttons control the speed of the game.
           - Use the <strong>Next</strong> button to step through the game one generation at a time, as against automatic play. <br/>
           - Use the <strong>input form</strong> to skip ahead to a certain generation.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Explanation;
