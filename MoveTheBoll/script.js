// Get the ball element
const ball = document.getElementById("app");

// Set the initial position of the ball randomly
let ballX = Math.floor(Math.random() * window.innerWidth);
let ballY = Math.floor(Math.random() * window.innerHeight);
ball.style.left = ballX + "px";
ball.style.top = ballY + "px";

// Set the movement speed of the ball
const movementSpeed = 10;

// Function to move the ball
function moveBall(keyCode) {
  const ballRect = ball.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Move the ball based on the pressed key
  switch (keyCode) {
    case 87: // 'W' key
      if (ballRect.top - movementSpeed > 0) {
        ballY -= movementSpeed;
      }
      break;
    case 65: // 'A' key
      if (ballRect.left - movementSpeed > 0) {
        ballX -= movementSpeed;
      }
      break;
    case 83: // 'S' key
      if (ballRect.bottom + movementSpeed < viewportHeight) {
        ballY += movementSpeed;
      }
      break;
    case 68: // 'D' key
      if (ballRect.right + movementSpeed < viewportWidth) {
        ballX += movementSpeed;
      }
      break;
    default:
      return; // Ignore other keys
  }

  // Update the position of the ball
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

// Event listener for keydown event
document.addEventListener("keydown", function (event) {
  moveBall(event.keyCode);
});
