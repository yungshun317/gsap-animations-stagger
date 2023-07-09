"use strict";

// Reduce the number of nodes to speed up work
const quantNodes = 55;
const surfWidth = 700;
const surfHeight = 500;
const nodesDistance = surfHeight / Math.sqrt(quantNodes / (surfWidth / surfHeight));
const quantColumn = Math.floor(surfWidth / nodesDistance);
const quantRow = Math.floor(surfHeight / nodesDistance);
const squareSize = 30;

let i = 0;
// Animation objects
let outerCircle, innerCircle;
// Distance between cursor and circle center
let L;
let L1 = Math.sqrt(Math.pow(surfWidth, 2) + Math.pow(surfHeight, 2));
// Complete list of ids
let idSquares = "";
// Square scaling factor
let scalingFactor = 1;
// Angle of rotation of squares
let angle = 0;

// SVG square constructor
function Rectangle(id, positionX, positionY, width, height, fill) {
    this.id = id;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.fill = fill;

    this.draw = function() {
        svgContainer.innerHTML += `<rect id="${this.id}" x="${this.positionX}" y="${this.positionY}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Random color generator
function randColor() {
    let r = Math.floor(getRandomFloat(0.2, 1) * (256)),
        g = Math.floor(getRandomFloat(0.2, 1) * (256)),
        b = Math.floor(getRandomFloat(0.2, 1) * (256));

    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

function buildSurface() {
    let squareArray = [];

    for (let j = 1; j < quantRow; j++) {
        for (let k = 1; k < quantColumn; k++) {
            i++;
            squareArray[i] = new Rectangle("k" + i, k * nodesDistance, j * nodesDistance, squareSize, squareSize, randColor());
            squareArray[i].draw();
        }
    }
}
buildSurface();

function createListIdSquares() {
    i = 0;

    for (let j = 1; j < quantRow; j++) {
        for (let k = 1; k < quantColumn; k++) {
            i++;

            if ((k == (quantColumn - 1)) & (j == (quantRow - 1))) {
                idSquares = idSquares + "#" + "k" + i;
            } else {
                idSquares = idSquares + "#" + "k" + i + ",";
            }
        }
    }
}
createListIdSquares();
console.log(idSquares);
// #k1,#k2,#k3,#k4,#k5,#k6,#k7,#k8,#k9,#k10,#k11,#k12,#k13,#k14,#k15,#k16,#k17,#k18,#k19,#k20,#k21,#k22,#k23,#k24,#k25,#k26,#k27,#k28,#k29,#k30,#k31,#k32,#k33,#k34,#k35

window.addEventListener("mousemove", function(e) {
    L = Math.sqrt(Math.pow((surfWidth - e.pageX), 2) + Math.pow((surfHeight - e.pageY), 2));
    scalingFactor = L / L1 * 2;

    gsap.set(idSquares, {transformOrigin: "50% 50%"});
    gsap.to(idSquares, {
        duration: 4,
        rotation: angle,
        x: e.pageX - (surfWidth / 2),
        y: e.pageY - (surfHeight / 2),
        width: squareSize * scalingFactor,
        height: squareSize * scalingFactor,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.05
    });
    angle = angle + 10;
}, false);