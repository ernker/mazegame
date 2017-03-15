import React from 'react'
import {connect} from 'react-redux';
import Canvas from 'react-canvas-component'

class MazeCanvas extends React.Component {
    constructor() {
        super();

        this.drawBlock = this.drawBlock.bind(this);
        this.drawCanvas = this.drawCanvas.bind(this);
    }

    drawBlock(ctx, {x, y}) {
        const {width, height} = ctx.canvas;
        let blockWidth = width / 10;
        let blockHeight = height / 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
    }

    drawBot(ctx, {x, y}) {
        const {width, height} = ctx.canvas;
        let blockWidth = width / 10;
        let blockHeight = height / 10;
        ctx.fillStyle = 'green';
        //ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
        ctx.arc(x * blockWidth + blockWidth / 2, y * blockHeight + blockWidth / 2, Math.min(blockWidth * 0.75, blockHeight * 0.75) / 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    drawCanvas({ctx, time}) {
        const {width, height} = ctx.canvas;
        let blockWidth = width / 10;
        let blockHeight = height / 10;
        ctx.beginPath();
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'black';

        for(let x = 0; x < this.props.mazeArray.length; x++) {
            for(let y = 0; y < this.props.mazeArray[x].length; y++) {
                if (this.props.mazeArray[y][x] === 1) {
                    ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
                }
            }
        }
        this.drawBot(ctx, this.props.currentCoords);
        ctx.closePath();
    }

    render() {
        console.log(this.props.app);

        return <Canvas draw={this.drawCanvas} width={400} height={400} style={{"border": "1px solid #000000"}}/>
    }
}

function mapStatetoProps(state) {
    return {
        mazeArray: state.app.mazeArray,
        currentCoords: state.app.currentCoords
    };
}

export default connect(mapStatetoProps)(MazeCanvas);
