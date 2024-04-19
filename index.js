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
const gameAreaElement = document.querySelector("#game-area");
const player = new Player(gameAreaElement);
const enemiesArray = [];

setInterval(() => {
  const newEnemy = new Enemy();
  enemiesArray.push(newEnemy);
}, 2000);

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

function collissionCheck() {
  enemiesArray.forEach((enemy) => {
    const enemyLeftEdge = enemy.x;
    const enemyRightEdge = enemy.x + enemy.width;
    const enemyTopEdge = enemy.y;
    const enemyBottomEdge = enemy.y + enemy.height;

    const playerLeftEdge = player.x;
    const playerRightEdge = player.x + player.width;
    const playerTopEdge = player.y;
    const playerBottomEdge = player.y + player.height;
    if (
      playerLeftEdge < enemyRightEdge &&
      playerRightEdge > enemyLeftEdge &&
      playerTopEdge < enemyBottomEdge &&
      playerBottomEdge > enemyTopEdge
    ) {
      enemy.element.remove()
    }
  });
}

function gameLoop() {
  // Add here all the movement that is going to be trigered on each frame
  frameCounter++;
  enemiesArray.forEach((enemy) => {
    enemy.move();
  });
  collissionCheck();
  player.move();
  window.requestAnimationFrame(gameLoop);
}
window.requestAnimationFrame(gameLoop);

document.addEventListener("keydown", (keyEvent) => {
  if (keyEvent.key === "w") {
    player.direction = "up";
  } else if (keyEvent.key === "s") {
    player.direction = "down";
  }
});
