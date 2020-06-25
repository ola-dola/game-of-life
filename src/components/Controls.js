import React, { useState } from "react";
import {
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Button,
  Form,
  Col,
} from "react-bootstrap";

function Controls(props) {
  const [value, setValue] = useState("");
  const handleShapeSelect = (evt) => {
    console.log(evt);
    props.pickShape(evt);
  };
  return (
    <div className="center">
      <ButtonToolbar>
        <Button variant="success" className="mr-3" onClick={props.onShow}>
          {" "}
          ℹ Game Explanation
        </Button>
        <ButtonGroup className="mr-3">
          <Button className="btn btn-default" onClick={props.playButton}>
            Play
          </Button>
          <Button className="btn btn-default" onClick={props.pauseButton}>
            Pause
          </Button>
          <Button className="btn btn-default" onClick={props.clear}>
            Stop
          </Button>
          <Button className="btn btn-default" onClick={props.nextButton}>
            Next
          </Button>
          {/* <Button className="btn btn-default" onClick={props.pauseButton}>
            Previous
          </Button> */}
        </ButtonGroup>

        <ButtonGroup className="mr-3">
          <Button className="btn btn-default" onClick={props.fast}>
            Fast
          </Button>
          <Button className="btn btn-default" onClick={props.slow}>
            Slow
          </Button>
        </ButtonGroup>
        <ButtonGroup className="mr-3">
          <Button className="btn btn-default" onClick={props.seed}>
            Seed
          </Button>
          <DropdownButton
            title="Shapes"
            id="shapes-menu"
            onSelect={handleShapeSelect}
          >
            <Dropdown.Item eventKey="1">Glider</Dropdown.Item>
            <Dropdown.Item eventKey="2">Exploder</Dropdown.Item>
            <Dropdown.Item eventKey="3">Ten Cell Row</Dropdown.Item>
            <Dropdown.Item eventKey="4">Tumbler</Dropdown.Item>
            <Dropdown.Item eventKey="5">Lightweight Spaceship</Dropdown.Item>
            <Dropdown.Item eventKey="fityCent 😉">Clear</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>

        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Skip to (n) generation"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Col>
            <Col>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setValue("");
                  props.nthGeneration(Number(value));
                }}
              >
                Submit
              </Button>{" "}
            </Col>
          </Form.Row>
        </Form>
      </ButtonToolbar>
    </div>
  );
}

export default Controls;
