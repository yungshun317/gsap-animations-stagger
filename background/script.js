"use strict";

function loadCanvas(curCanvasId) {
    let canvas = document.createElement("canvas");

    canvas.id = curCanvasId;
    canvas.width = 114;
    canvas.height = 76;
    canvas.className = "block";

    document.body.appendChild(canvas);
}

function loadImg(curCanvasId, i, j) {
    let canvas = document.getElementById(curCanvasId);
    let context = canvas.getContext("2d");
    let imageObj = new Image();

    imageObj.onload = function() {
        let sX = i;
        let sY = j;
        let sW = 114;
        let sH = 76;
        let dW = sW;
        let dH = sH;
        let dX = 0;
        let dY = 0;

        context.drawImage(imageObj, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    imageObj.src = "static/background_Beach.png";
}

function collectAnimationObjects() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let curCanvasId = "canvas_Column" + i + "_Row" + j;

            loadCanvas(curCanvasId);
            loadImg(curCanvasId, j * 114, i * 76);
        }
    }
}

