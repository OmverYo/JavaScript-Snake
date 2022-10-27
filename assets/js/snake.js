// Initial background and canvas drawing
var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");

// Initial game score
let score = 0;

// Prevents direction change
let changingDirection = false;

// Declares the pixels of snake bodies
const snakePixel = 20;

// Start game
main();

document.addEventListener("keydown", changeDirection);

function main() {
    if (has_game_ended()) return;

    changingDirection = false;
    setTimeout(function onTick() {
        drawCanvas();
        drawApple();
        moveSnake();
        drawSnake();
        main();
    }, 500)
}

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

// Function to draw the apple
function drawApple() {
    // Draws the apple
    context.fillStyle = "red";
    context.fillRect(apple.xPosition, apple.yPosition, snakePixel, snakePixel);
    context.strokeStyle = "#800000";
    context.strokeRect(apple.xPosition, apple.yPosition, snakePixel, snakePixel);
}

// Activates snake's movement
function moveSnake() {
    const head = {
        xPosition: snake.snakeSize[0].xPosition + snake.xVelocity,
        yPosition: snake.snakeSize[0].yPosition + snake.yVelocity
    };
    snake.snakeSize.unshift(head);
    snake.snakeSize.pop();
}

// Enable the player move the snake using the arrow keys
function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    if (changingDirection) return;
    changingDirection = true;

    const keyPressed = event.keyCode;
    const goingUp = snake.yVelocity === -10;
    const goingDown = snake.yVelocity === 10;
    const goingRight = snake.xVelocity === 10;
    const goingLeft = snake.xVelocity === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        snake.xVelocity = -10;
        snake.yVelocity = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        snake.xVelocity = 0;
        snake.yVelocity = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        snake.xVelocity = 10;
        snake.yVelocity = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        snake.xVelocity = 0;
        snake.yVelocity = 10;
    }
}

function has_game_ended() {
    for (let i = 4; i < snake.snakeSize.length; i++) {
        if (snake.snakeSize[i].xPosition === snake.snakeSize[0].xPosition && snake.snakeSize[i].yPosition === snake.snakeSize[0].yPosition) return true
    }
    const hitLeftWall = snake.snakeSize[0].xPosition < 0;
    const hitRightWall = snake.snakeSize[0].xPosition > canvas.width - 10;
    const hitToptWall = snake.snakeSize[0].yPosition < 0;
    const hitBottomWall = snake.snakeSize[0].yPosition > canvas.height - 10;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}