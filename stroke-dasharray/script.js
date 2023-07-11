"use strict";

function Circle(id, positionX, positionY, radius) {
    this.id = id;
    this.positionX = positionX || 0;
    this.positionY = positionY || 0;
    this.radius = radius;

    this.draw = function() {
        svgContainer.innerHTML += `<circle id="${this.id}" cx="${this.positionX}" cy="${this.positionY}" r="${this.radius}" stroke="white" stroke-width="10" stroke-dasharray="100%, 0" />`;
    }
}

function assembleFigure() {
    let r = 300;
    let x = 450;
    let y = 250;

    for (let j = 0; j < 20; j++) {
        let circle = new Circle("cr", x, y, r);

        circle.draw();
        r = r - 15;
    }
}
assembleFigure();

gsap.to("#cr", {
    duration: 2,
    delay: 1,
    repeatDelay: 1,
    strokeDasharray: "0, " + "100%",
    yoyo: true,
    ease: "power1.inOut",
    repeat: -1,
    stagger: function(index, target, list) {
        let gap = 0.2;

        if (index % 2 == 0) {
            gap = 0.05;
        } else {
            gap = 0.2;
        }

        // Return the total delay from the starting position
        return gap * index;
    }
});