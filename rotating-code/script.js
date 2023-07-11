"use strict";

function loadCanvas(curCanvasId) {
    let canvas = document.createElement("canvas");

    canvas.id = curCanvasId;
    canvas.width = 946;
    canvas.height = 28;
    canvas.className = "block";

    document.body.appendChild(canvas);
}

// Crop image into equal parts
function loadImg(curCanvasId, i) {
    let canvas = document.getElementById(curCanvasId);
    let context = canvas.getContext("2d");
    let imageObj= new Image();

    imageObj.onload = function() {
        let sourceX = 0;
        let sourceY = i;
        let sourceWidth= 946;
        let sourceHeight= 28;
        let destWidth= sourceWidth;
        let destHeight= 28;
        let destX= 0;
        let destY= 0;

        context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    }

    imageObj.src = "code.png";
}

// Create grid of canvas
for (let i = 0; i < 27; i++) {
    let curCanvasId= "canvas_Column" + i;

    loadCanvas(curCanvasId);
    loadImg(curCanvasId, i * 28);
};

let skip= 1, increment= 2;
let angleY= 0, angleZ= 0;

window.addEventListener("mousemove", function(e) {
    if (skip % 5 == 0) {
        if (angleY < -89) {
            if (angleY % 90 == 0) {
                increment = increment * (-1);
            }
        }

        gsap.to(".block", {
            duration: 2,
            rotateY: angleY,
            rotateZ: -angleZ,
            stagger: 0.1
        });

        skip += 1;
        angleY = angleY - 5 * Math.abs(increment);
        angleZ = angleZ + increment;
    }

    skip += 1;
}, false);