var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");

// Draws the game secttion
context.fillStyle = "#483D8B";
context.fillRect(0, 0, canvas.clientWidth, canvas.height);

// Declares the pixels of snake bodies
var snakePixel = 20;

var snake = {
    // Snake speed
    xVelocity: 0,
    yVelocity: 0,

    // Snake size array keeps the number of snake body (length)
    snakeSize: [
        { xPosition: 400, yPosition: 400 },
        { xPosition: 390, yPosition: 400 },
        { xPosition: 380, yPosition: 400 },
        { xPosition: 370, yPosition: 400 },
        { xPosition: 360, yPosition: 400 }
    ]

};

var apple = {
    // Apple's initial position
    xPosition: 400,
    yPosition: 600
};

// Function to draw the snake
function drawSnake() {
    snake.snakeSize.forEach(drawSnakeTails);
}

// Function to draw the snake's tails or bodies
function drawSnakeTails(snakeTails) {
    context.fillStyle = "green";
    context.fillRect(snakeTails.xPosition, snakeTails.yPosition, snakePixel - 1, snakePixel - 1);
}

// Fnction to draw the apple
function drawApple() {
    // Draws the apple
    context.fillStyle = "red";
    context.fillRect(apple.xPosition, apple.yPosition, snakePixel - 1, snakePixel - 1);
}

drawApple();
drawSnake();