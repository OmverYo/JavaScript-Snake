// Initial background and canvas drawing
var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");

// Initial game score
let score = 0;

// Declares the pixels of snake bodies
const snakePixel = 20;

// Start game
main();

function main() {
    setTimeout(function onTick() {
        drawCanvas();
        moveSnake();
        drawSnake();
        main();
    }, 100)
};

function drawCanvas() {
    // Draws the game secttion
    context.fillStyle = "#483D8B";
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);
    context.strokeStyle = "#ff1a1a";
    context.strokeRect(0, 0, canvas.clientWidth, canvas.height);
}

// Snake object and contents
let snake = {
    // Snake speed
    xVelocity: snakePixel,
    yVelocity: 0,

    // Snake size array keeps the number of snake body (length)
    snakeSize: [
        { xPosition: 400, yPosition: 400 },
        { xPosition: 380, yPosition: 400 },
        { xPosition: 360, yPosition: 400 },
        { xPosition: 340, yPosition: 400 },
        { xPosition: 320, yPosition: 400 }
    ]
};

// Apple object and contents AND Initial Position
let apple = {
    xPosition: 400,
    yPosition: 600
};

// Function to draw the snake
function drawSnake() {
    snake.snakeSize.forEach(drawSnakeTails);
}

// Function to draw the snake's tails or bodies
function drawSnakeTails(snakeTails) {
    context.fillStyle = "#006600";
    context.fillRect(snakeTails.xPosition, snakeTails.yPosition, snakePixel, snakePixel);
    context.strokeStyle = "#003300";
    context.strokeRect(snakeTails.xPosition, snakeTails.yPosition, snakePixel, snakePixel);
}

// Fnction to draw the apple
function drawApple() {
    // Draws the apple
    context.fillStyle = "red";
    context.fillRect(apple.xPosition, apple.yPosition, snakePixel, snakePixel);
    context.strokeRect(apple.xPosition, apple.yPosition, snakePixel, snakePixel);
}

// Activates snake's movement
function moveSnake() {
    const head = { x: snake.snakeSize[0].xPosition + snake.xVelocity, y: snake.snakeSize[0].yPosition + snake.yVelocity };
    snake.snakeSize.unshift(head);
    snake.snakeSize.pop();
}