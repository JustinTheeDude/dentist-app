import React, { Component } from "react"; import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';

class MouthCanvas extends Component {
  state = {
    color: "black",
    brushRadius: 2,
    lazyRadius: 2,
  };

  constructor(props) {
    super();
    this.canvasRef = React.createRef();
  }



  sendData = () => {
    this.props.getDrawing(this.saveableCanvas.getSaveData());
  }

  render() {
    const drawing = this.props.drawing
    return (
      <div>
        <button id="btn-canvas" onClick={(e) => {
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
          imgSrc={mouth}
          saveData={drawing}
          className="diagram"
        />
      </div>
    );
  }

}

export default MouthCanvas;