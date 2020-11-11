import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw"
import ptnadult from '../assets/Ptnadult.svg.png';

class PtnadultCanvas extends Component {
 
  state = {
    color: "black",
    height: 200,
    width: 400,
    brushRadius: 2,
    lazyRadius: 2,
  };

  constructor(props) {
    super();
    this.canvasRef = React.createRef();
  }



  sendData = () => {
    this.props.getDiagram(this.saveableCanvas.getSaveData());
  }

  render() {
    const diagram = this.props.diagram

    return (
      <div>
        <div>
          <button
            id="btn-canvas"
            onClick={(e) => {
              e.preventDefault()
              this.sendData()
            }}
          >
            Save
          </button>
          &nbsp;
          <button
            id="btn-canvas"
            onClick={(e) => {
              e.preventDefault()
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          &nbsp;
          <button
            id="btn-canvas"
            onClick={(e) => {
              e.preventDefault()
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
              canvasHeight={this.state.height}
              canvasWidth={this.state.width}
              imgSrc={ptnadult}
              saveData={diagram}
            />

        </div>

      </div>

    );
  }

}

export default PtnadultCanvas;