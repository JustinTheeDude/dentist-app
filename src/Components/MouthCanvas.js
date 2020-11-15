  
import React, { Component } from "react"; import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';
import { Button } from "reactstrap";
import {  withRouter } from 'react-router';
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
    const id = this.props.id
    return (
      <div>
        <button id="btn-canvas" onClick={(e) => {
            e.preventDefault()
            this.sendData()
          }}
        >
          セーブ
        </button>

        <button
          id="btn-canvas"
          onClick={(e) => {
            e.preventDefault()
            this.saveableCanvas.clear();
          }}
        >
          クリアー
        </button>
       
        <button
          id="btn-canvas"
          onClick={(e) => {
            e.preventDefault()
            this.saveableCanvas.undo();
          }}
        >
          アンドゥ
        </button>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          imgSrc={mouth}
          saveData={drawing}
        />
        <Button className="nav-btn" onClick={() => this.props.history.goBack()}>戻る</Button>
        {
          id ?
         <Button className="nav-btn" onClick={()=> {this.props.history.push(`/form/${id}/confirm`)}}>次</Button>
         :
         <Button className="nav-btn" onClick={()=> {this.props.history.push(`/form/confirm`)}}>次</Button>
        }
      </div>
    );
  }

}

export default withRouter(MouthCanvas);