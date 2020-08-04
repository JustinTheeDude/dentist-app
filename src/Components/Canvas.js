import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import mouth from '../assets/mouth.png';
import firebase from "./firebase"
class Canvas extends Component {
    state = {
        color: "black",
        width: 300,
        height: 300,
        brushRadius: 2,
        lazyRadius: 2,
        drawing: ''
    };
    componentDidMount() {
        const user = firebase.auth().currentUser
        const ref = firebase.database().ref(`Dentist/${user.uid}/Form`)
        const self = this;
        ref.orderByChild("drawing").on("child_added", function(snap) {
            if(self.state.drawing) {
                self.setState({
                    drawing: snap.val().drawing
                })

            }

            console.log("this is the drawing: ", typeof snap.val().drawing)
        })

    }

    render() {
        return (
            <div>
                <button
                    id="btn-canvas"
                    onClick={(e) => {
                        e.preventDefault()
                        const user = firebase.auth().currentUser;
                        const itemsRef = firebase.database().ref(`Dentist/${user.uid}/Form`);
                        const items = {
                            drawing: this.saveableCanvas.getSaveData()
                        }
                        itemsRef.push(items)
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
                    // saveData={localStorage.getItem("savedDrawing")}
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    height={this.state.height}
                    width={this.state.width}
                    imgSrc={mouth}
                />
                {/* <CanvasDraw
              saveData={this.drawing}
             imgSrc={mouth}
          />  */}
            </div>
        );
    }
}

export default Canvas;