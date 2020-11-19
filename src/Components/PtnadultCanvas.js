import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw"
import ptnadult from '../assets/toothNotation.png';

class PtnadultCanvas extends Component {
 
  state = {
    color: "black",
    height: 300,
    width: 400,
    brushRadius: 2,
    lazyRadius: 2,
  };

  constructor() {
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
            保存
          </button>
          
          <button
            id="btn-canvas"
            onClick={(e) => {
              e.preventDefault()
              this.saveableCanvas.clear();
            }}
          >
            全消去
          </button>

          <button
            id="btn-canvas"
            onClick={(e) => {
              e.preventDefault()
              this.saveableCanvas.undo();
            }}
          >
           消去
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
              className="diagram"
            />

        </div>

      </div>

    );
  }

}

export default PtnadultCanvas;