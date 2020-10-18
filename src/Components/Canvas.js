  
import React, { Component } from "react"; import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';

class Canvas extends Component {
  state = {
    color: "black",
    width: 300,
    height: 300,
    brushRadius: 2,
    lazyRadius: 2,
    images: []
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
        <button
          id="btn-canvas"
          onClick={(e) => {
            e.preventDefault()
            this.sendData()
          }}
        >
          Save
        </button>
        {/* &nbsp; */}
        <button
          id="btn-canvas"
          onClick={(e) => {
            e.preventDefault()
            this.saveableCanvas.clear();
          }}
        >
          Clear
        </button>
        {/* &nbsp; */}
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
          height={this.state.height}
          width={this.state.width}
          imgSrc={mouth}
          saveData={drawing}
        />
        <img src={this.state.images[0]} alt=""/>
        <img src={this.state.images[1]} alt=""/>
        <img src={this.state.images[2]} alt=""/>
        <img src={this.state.images[3]} alt=""/>
      </div>
    );
  }

}

export default Canvas;