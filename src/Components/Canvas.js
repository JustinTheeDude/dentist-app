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
        image: [],
    };

    canvasToRasterImage = (canvas, type, backgroundColor) => {
        let context = canvas.getContext("2d")
        //cache height and width
        let w = canvas.width;
        let h = canvas.height;
        let data;

        if(backgroundColor){
            //get the current ImageData for the canvas.
            data = context.getImageData(0, 0, w, h);

            //store the current globalCompositeOperation
            var compositeOperation = context.globalCompositeOperation;

            //set to draw behind current content
            context.globalCompositeOperation = "destination-over";

            //set background color
            context.fillStyle = backgroundColor;

            //draw background / rect on entire canvas
            context.fillRect(0,0,w,h);
        }

        //get the image data from the canvas
        var imageData = canvas.toDataURL(`image/${type}`);

        if(backgroundColor){
            //clear the canvas
            context.clearRect (0,0,w,h);

            //restore it with original / cached ImageData
            context.putImageData(data, 0,0);

            //reset the globalCompositeOperation to what it was
            context.globalCompositeOperation = compositeOperation;
        }

        //return the Base64 encoded data url string
        return imageData;
    }


    updateStateImage = () => {
        const canvas = document.querySelectorAll("canvas");
        let images = [];
        let self = this;
        for(let c of canvas) {
            images.push(c.toDataURL());
        }

        this.setState({
            image: images
        });
    }

    sendData = () => {
        this.props.getDrawing(this.saveableCanvas.getSaveData());
    }


    render() {
        const drawing = this.props.drawing
        const style = {
            background: `url(${this.state.image})`,
        }
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
                    className="canvas"
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    height={this.state.height}
                    width={this.state.width}
                    imgSrc={mouth}
                    saveData={drawing}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    this.updateStateImage()}}>Update</button>
                <img src={this.state.image[0]} alt="" />
                <img src={this.state.image[1]} alt="" />
                <img src={this.state.image[2]} alt="" />
                <img src={this.state.image[3]} alt="" />
            </div>
        );
    }
}


export default Canvas;