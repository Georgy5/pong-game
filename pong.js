
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

// render left paddle
function renderPaddle(y) {
  ctx.fillStyle = 'white';
  ctx.fillRect(20, y, 15, 80);
}


// render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// Render Pong Game
let posX = 50
let posY = 50
let vX = +2
let vY = -2
let paddleY = 20
setInterval(() => {
  renderField()
  renderBall(posX, posY)
//   renderPaddle(paddleY)

  posX += vX
  posY += vY

  if (posX + RADIUS === canvasWidth || posX - RADIUS === 0) {
    vX = -1 * vX
  }
  if (posY + RADIUS === canvasHeight || posY - RADIUS === 0) {
    vY = -1 * vY
  }
  

  // 3. Impact of the ball with the paddle in the X axis
}, 17)

document.addEventListener('keydown', (event) => {
  const key = event.key
  // const {key} = event
  if (key === 'w') {
    if (paddleY >= 5) {
      paddleY -= 5
    }
  }
  if (key === 's') {
    paddleY += 5
  }
})
