
const gameAreaElement = document.querySelector("#game-area");
//  When we create a new instance of the Player class, gameAreaElement as an argument
const player = new Player(gameAreaElement);
// Do you think is the best approach to create an array of enemies here? Or should we create a game.js file and create a new instance of the Game class that will have an array of enemies? Think about the best approach to organize your code and keep it clean and easy to maintain.
const enemiesArray = [];

setInterval(() => {
  // In the case of the enemy, we are not passing the gameAreaElement as an argument because we are referencing that element inside the class. Think about your best approach to solve this issue.
  const newEnemy = new Enemy();
  enemiesArray.push(newEnemy);
}, 2000);

// We can count the frames to keep track of the time, in case we want to trigger some event after a certain amount of time. For example, we can increase the score every 500 frames. if (frameCounter % 500 === 0) { score++; }
let frameCounter = 0;

// If we had a game object, we could call the collissionCheck method from another object and not here.
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

// The gameLoop is one of the most important functions in the game. It is responsible for updating the game state and rendering the game on the screen. It is called recursively using the window.requestAnimationFrame method. This method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next "repaint". The method takes as an argument a callback function that will be invoked before the repaint. The callback function is the gameLoop function itself. This way, the gameLoop function will be called recursively, and the game will be updated and rendered on the screen on each frame.

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

// The event listener in the document is going to check the user inputs. In this case, we are checking the "w" and "s" keys to move the player up and down. We could also add the "a" and "d" keys to move the player left and right. We could also add the "space" key to make the player shoot. 

document.addEventListener("keydown", (keyEvent) => {
  if (keyEvent.key === "w") {
    player.direction = "up";
  } else if (keyEvent.key === "s") {
    player.direction = "down";
  }
});
