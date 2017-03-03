import React from 'react'
import {connect} from 'react-redux';
import Canvas from 'react-canvas-component'

class MazeCanvas extends React.Component {
    constructor() {
        super();

        this.drawBlock = this.drawBlock.bind(this);
        this.drawCanvas = this.drawCanvas.bind(this);

        this.state = {
            mazeArray: [
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            entryCoords: {x: 0, y: 0},
            exitCoords: {x: 10, y: 10},
            currentCoords: {x: 0, y: 0}
        }
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
        ctx.clearRect(0, 0, width, height);
        //this.drawBlock(ctx, {x: 1, y: 2});
        //this.drawBlock(ctx, {x: 5, y: 5});
        //this.drawBlock(ctx, {x: 5, y: 6});
        //this.drawBlock(ctx, {x: 4, y: 5});
        this.drawBot(ctx, this.state.currentCoords)
    }

    render() {
        console.log(this.state);

        return <Canvas draw={this.drawCanvas} width={400} height={400} realtime
                       style={{"border": "1px solid #000000"}}/>
    }
}

function mapStatetoProps(state) {
    return state;
}

export default connect(mapStatetoProps)(MazeCanvas);
