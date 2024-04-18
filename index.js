/* const player = {
  element: document.querySelector("#player"),
  x: 0,
  y: 0,
  score: 0,
}; */

/* setInterval(() => {
    player.x +=1;
    playerElement.style.left = `${player.x}px`;
}, 30);
 */
/* function move() {
  player.x += 1;
  player.element.style.left = `${player.x}px`;
  move();
} */

// move() // This is going to make the app crash
const gameAreaElement = document.querySelector('#game-area');
const player = new Player(gameAreaElement);

// BUT
let frameCounter = 0;

/* function moveRight() {
  frameCounter++;
  // console.log(frameCounter); // we keep track of the frames
  player.x += 1;
  player.element.style.left = `${player.x}px`;

  window.requestAnimationFrame(moveRight); // we are calling this function on each frame
}

window.requestAnimationFrame(moveRight); */

function gameLoop() {
  // Add here all the movement that is going to be trigered on each frame
  frameCounter++;
  window.requestAnimationFrame(gameLoop);
  player.move();
}
window.requestAnimationFrame(gameLoop);

document.addEventListener("keydown", (keyEvent) => {
  if (keyEvent.key === "w") {
    console.log("MOVE UP");
    player.direction = "up";
  } else if (keyEvent.key === "s") {
    console.log("MOVE DOWN");
    player.direction = "down";
  }
});


