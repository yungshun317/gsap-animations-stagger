"use strict";

function loadCanvas(curCanvasId) {
    let canvas = document.createElement("canvas");

    canvas.id = curCanvasId;
    canvas.width = 946;
    canvas.height = 28;
    canvas.className = "block";

    document.body.appendChild(canvas);
}

function loadImg(curCanvasId, i) {
    let canvas = document.getElementById(curCanvasId);
    let context = canvas.getContext("2d");
    let imageObj = new Image();

    imageObj.onload = function() {
        let sourceX = 0;
        let sourceY = i;
        let sourceWidth = 946;
        let sourceHeight = 28;
        let destWidth = sourceWidth;
        let destHeight = 28;
        let destX = 0;
        let destY = 0;

        context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    }

    imageObj.src = "code.png";
}

for (let i = 0; i < 27; i++) {
    let curCanvasId="canvas_Column" + i;

    loadCanvas(curCanvasId);
    loadImg(curCanvasId,i * 28);
};