import React, { Component } from "react";


import CanvasDraw from "react-canvas-draw";


class Canvas extends Component {
  state = {
    color: "black",
    brushRadius: 2,
    lazyRadius: 2
  };
  

  render() {
    return (
      <div>
        <button
          onClick={() => {
            localStorage.setItem(
              "savedDrawing",
              this.saveableCanvas.getSaveData()
            );
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            this.saveableCanvas.clear();
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            this.saveableCanvas.undo();
          }}
        >
          Undo
        </button>

        <CanvasDraw 
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          imgSrc="../assets/mouth.png"  
          />
      </div>
    );
  }
}

export default Canvas;