import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';

class Canvas extends Component {
  state = {
    color: "black",
    width: 300,
    height: 300,
    brushRadius: 2,
    lazyRadius: 2
  };
  
  render() {
    return (
      <div>
        <button
          id="btn-canvas"
          onClick={() => {
            localStorage.setItem(
              "savedDrawing",
              this.saveableCanvas.getSaveData()
            );
          }}
        >
          Save
        </button>
        &nbsp; 
        <button
          id="btn-canvas"
          onClick={() => {
            this.saveableCanvas.clear();
          }}
        >
          Clear
        </button>
        &nbsp; 
        <button 
          id="btn-canvas"
          onClick={() => {
            this.saveableCanvas.undo();
          }}
        >
          Undo
        </button>
        &nbsp; 
        <button 
          id="btn-canvas"
          onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Load
        </button>

        <CanvasDraw 
          saveData={localStorage.getItem("savedDrawing")}
          // ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          height={this.state.height}
          width={this.state.width}
          imgSrc={mouth}
          />
      </div>
    );
  }
}

export default Canvas;