import React from "react";
import {
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";

function Buttons(props) {
  const handleShapeSelect = (evt) => {
    console.log(evt);
    props.gridSize(evt);
  };
  return (
    <div className="center">
      <ButtonToolbar>
        <ButtonGroup className="mr-2">
          <Button className="btn btn-default" onClick={props.playButton}>
            Play
          </Button>
          <Button className="btn btn-default" onClick={props.pauseButton}>
            Pause
          </Button>
          <Button className="btn btn-default" onClick={props.clear}>
            Stop
          </Button>
          <Button className="btn btn-default" onClick={props.fast}>
            Fast
          </Button>
          <Button className="btn btn-default" onClick={props.slow}>
            Slow
          </Button>
          <Button className="btn btn-default" onClick={props.seed}>
            Seed
          </Button>
        </ButtonGroup>

        <ButtonGroup className="mr-2">
          <Button className="btn btn-default" onClick={props.playButton}>
            Next
          </Button>
          <Button className="btn btn-default" onClick={props.pauseButton}>
            Previous
          </Button>
        </ButtonGroup>
        <DropdownButton
          title="Shapes"
          id="shapes-menu"
          onSelect={handleShapeSelect}
        >
          <Dropdown.Item eventKey="1">Glider</Dropdown.Item>
          <Dropdown.Item eventKey="2">Exploder</Dropdown.Item>
          <Dropdown.Item eventKey="3">Gospel Glider Gun</Dropdown.Item>
          <Dropdown.Item eventKey="4">Ten Cell Row</Dropdown.Item>
          <Dropdown.Item eventKey="5">Tumbler</Dropdown.Item>
          <Dropdown.Item eventKey="6">Lightweight Spaceship</Dropdown.Item>
        </DropdownButton>
      </ButtonToolbar>
    </div>
  );
}

export default Buttons;
