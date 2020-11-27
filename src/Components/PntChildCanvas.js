import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw"
import pntchild from '../assets/pntChild.png';

class PtnChildCanvas extends Component {

  state = {
    color: "black",
    brushRadius: 2,
    lazyRadius: 2,
  };

  constructor() {
    super();
    this.canvasRef = React.createRef();
  }


  sendData = () => {
    this.props.getPntChild(this.saveableCanvas.getSaveData());
  }

  render() {
    const pntChild = this.props.pntChild

    return (
      <div className="form-box">
        <div>
          <button id="btn-canvas" onClick={(e) => { e.preventDefault(); this.sendData(); }}>保存</button>
          <button id="btn-canvas" onClick={(e) => { e.preventDefault(); this.saveableCanvas.clear(); }}>全消去</button>
          <button id="btn-canvas" onClick={(e) => { e.preventDefault(); this.saveableCanvas.undo();  }}>消去</button>
            <CanvasDraw
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor={this.state.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={this.state.lazyRadius}
              imgSrc={pntchild}
              saveData={pntChild}
              className="diagram"
            />

        </div>
      </div>

    );
  }
}

export default PtnChildCanvas;