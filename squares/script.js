"use strict";

const quantNodes = 55;
const surfWidth = 700;
const surfHeight = 500;
const nodesDistance = surfHeight / Math.sqrt(quantNodes / (surfWidth / surfHeight));
const quantColumn = Math.floor(surfWidth / nodesDistance);
const quantRow = Math.floor(surfHeight / nodesDistance);
const squareSize = 30;

let i = 0;
let outerCircle, innerCircle;
let L;
let L1 = Math.sqrt(Math.pow(surfWidth, 2) + Math.pow(surfHeight, 2));
let idSquares = "";
let scalingFactor = 1;
let angle = 0;

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

function randColor() {
    let r = Math.floor(getRandomFloat(0.2, 1) * (256)),
        g = Math.floor(getRandomFloat(0.2, 1) * (256)),
        b = Math.floor(getRandomFloat(0.2, 1) * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
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