import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';

class Canvas extends Component {
  state = {
    color: "black",
    width: 300,
    height: 300,
    brushRadius: 2,
    lazyRadius: 2,
  };


//   componentDidMount() {
//         const user = firebase.auth().currentUser
//         const id = this.props.match.params.id
//         const ref = firebase.database().ref(`Dentist/${user.uid}/Form`).child(id)
//         ref.orderByChild("drawing").on("child_added", function(snap) {
//         if(this.state.drawing) {
//           this.setState({
//           drawing: snap.val().drawing
//         })

//         }

//         console.log("this is the drawing: ", typeof snap.val().drawing)
//       })
// }
sendData = () => {
  this.props.getDrawing(this.saveableCanvas.getSaveData());
}


  render() {
   const drawing = this.props.drawing
    return (
        <div>
            <button
              id="btn-canvas"
              onClick={this.sendData}
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
          // ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          height={this.state.height}
          width={this.state.width}
          imgSrc={mouth}
          saveData={drawing}
          />
      </div>
    );
  }
}

export default Canvas;