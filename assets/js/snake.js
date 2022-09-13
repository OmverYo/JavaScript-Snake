var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");

context.fillStyle = "#483D8B";
context.fillRect(0, 0, canvas.clientWidth, canvas.height);

var snake = {
    xPosition: 400,
    yPosition: 400,

    // Snake speed
    xVelocity: 0,
    yVelocity: 0,

    // Limits maximum snake size
    maxSnakeSize: 4
};

var apple = {
    xPosition: 200,
    yPosition: 200
};