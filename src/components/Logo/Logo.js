import React, { Component } from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./logo.webp";

export default class Logo extends Component {
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2"
          option={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner">
            <img
              src={brain}
              alt="logo brain"
              style={{ paddingTop: "5px", width: 140, height: 140 }}
            />
          </div>
        </Tilt>
      </div>
    );
  }
}
