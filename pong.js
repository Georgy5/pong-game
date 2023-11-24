
// Getting reference to Canvas object
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

// Setting dimensions of canvas
const canvasWidth = canvas.width
const canvasHeight = canvas.height
const RADIUS = 10

// render rectangle
function renderField() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

const paddleWidth = 15;
const paddleLength = 80;
const leftPaddleX = 20;

// render left paddle
function renderPaddle(y) {
  ctx.fillStyle = 'white';
  ctx.fillRect(leftPaddleX, y, paddleWidth, paddleLength);
}

// debug ball
function renderWhiteBall() {
  ctx.beginPath();
  ctx.arc(lPaddleWallX, 70, 5, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
}

// render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// find collisions
const collision = () => {
    canvasWidth || canvasHeight 
    // x + paddleWidth, y

}
// lPaddle() {}
// 20 + 15 + 10 = 45 
const lPaddleWallX = leftPaddleX + paddleWidth + RADIUS;

// if paddleWall 
console.log(lPaddleWallX);

// Render Pong Game
let posX = 50
let posY = 50
let vX = +2
let vY = -2
let leftPaddleY = 20
setInterval(() => {
  renderField()

  renderBall(posX, posY)
  renderPaddle(leftPaddleY)

  posX += vX
//   posY += vY
  collisionShouter(posX)
  if (posX + RADIUS === canvasWidth || posX - RADIUS === 0) {
  vX = -1 * vX

  } else if (posX + RADIUS === canvasWidth || posX === 44 && (posY >= leftPaddleY && posY <= leftPaddleY + paddleLengthss) ) {
    vX = -1 * vX
  }

//   if (posY + RADIUS === canvasHeight || posY - RADIUS === 0) {
//     vY = -1 * vY
//   }
  

  // 3. Impact of the ball with the paddle in the X axis
}, 17)

const collisionShouter = (posX) => {
  if (posX === 44) {
    console.log("Collision with left paddle detected!");
  };
}


document.addEventListener('keydown', (event) => {
  const key = event.key
  // const {key} = event
  if (key === 'w') {
    if (leftPaddleY >= 5) {
      leftPaddleY -= 5
    }
  }
  if (key === 's') {
    leftPaddleY += 5
  }
})
