import React from "react";
import {connect} from "react-redux";
import Canvas from "react-canvas-component";

class MazeCanvas extends React.Component {
    constructor() {
        super();

        this.drawBlock = this.drawBlock.bind(this);
        this.drawBot = this.drawBot.bind(this);
        this.drawCanvas = this.drawCanvas.bind(this);
    }

    drawBlock(ctx, {x, y}) {
        const {width, height} = ctx.canvas;
        let blockWidth = width / this.props.mazeToRender[0].length;
        let blockHeight = height / this.props.mazeToRender.length;
        ctx.fillStyle = 'black';
        ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }

    drawBot(ctx, {x, y}) {
        const {width, height} = ctx.canvas;
        let blockWidth = width / this.props.mazeToRender[0].length;
        let blockHeight = height / this.props.mazeToRender.length;
        ctx.fillStyle = 'red';
        //ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
        ctx.arc(x * blockWidth + blockWidth / 2, y * blockHeight + blockWidth / 2, Math.min(blockWidth * 0.75, blockHeight * 0.75) / 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    drawCanvas({ctx, time}) {
        const {width, height} = ctx.canvas;
        let blockWidth = width / this.props.mazeToRender[0].length;
        let blockHeight = height / this.props.mazeToRender.length;
        ctx.beginPath();
        ctx.clearRect(0, 0, width, height);

        for (let y = 0; y < this.props.mazeToRender.length; y++) {
            for (let x = 0; x < this.props.mazeToRender[y].length; x++) {
                switch (this.props.mazeToRender[y][x]) {
                    case 0: // Empty space
                        ctx.fillStyle = 'white';
                        break;
                    case 1: // Wall
                        ctx.fillStyle = 'black';
                        break;
                    case 2: // Entry point
                        ctx.fillStyle = 'blue';
                        break;
                    case 3: // Exit point
                        ctx.fillStyle = 'green';
                        break;
                    default:
                        ctx.fillStyle = 'white';
                }
                ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
            }
        }
        this.drawBot(ctx, this.props.botCoordsToRender);
        ctx.closePath();
    }

    render() {
        return <Canvas draw={this.drawCanvas} width={500}
                       height={500} style={{"border": "5px solid #000000"}}/>
    }
}

function mapStatetoProps(state) {
    return {
        mazeToRender: state.mazeToRender,
        botCoordsToRender: state.botCoordsToRender
    };
}

export default connect(mapStatetoProps)(MazeCanvas);
