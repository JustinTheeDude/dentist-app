  
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
          Save
        </button>

        <button
          id="btn-canvas"
          onClick={(e) => {
            e.preventDefault()
            this.saveableCanvas.clear();
          }}
        >
          Clear
        </button>
       
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
          imgSrc={mouth}
          saveData={drawing}
        />
        <Button className="nav-btn" onClick={() => this.props.history.goBack()}>Back</Button>
        {
          id ?
         <Button className="nav-btn" onClick={()=> {this.props.history.push(`/form/${id}/confirm`)}}>next</Button>
         :
         <Button className="nav-btn" onClick={()=> {this.props.history.push(`/form/confirm`)}}>next</Button>
        }
      </div>
    );
  }

}

export default withRouter(MouthCanvas);