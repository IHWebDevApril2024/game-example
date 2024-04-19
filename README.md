# GAME DEVELOPMENT WITH VANILLA JAVASCRIPT

## Approach

- The game is developed using Vanilla JavaScript, HTML and CSS.
- We are going to use OOP (Object Oriented Programming) to develop the game.
- All the existing entities in the game are going to be represented as objects.

## File distribution

- The first step for the game is to divide into 3 main files:
  - `index.html`
  - `style.css`
  - `script.js` or `index.js`

Those are the very basic files that we need to create a game. Of course, you are going to need more files as the game grows. `player.js`, `enemy.js`, `bullet.js`, etc.

Try to keep the game as simple as possible. The main goal is to learn how to develop games using Vanilla JavaScript, not to create the next Elden Ring.

## Example files

On the example files you'll find the code we implemented in class. Feel free to use it as a reference. Keep in mind the game we developed in class is not finished. You can improve it by adding more features. If your code is a copy-paste of the example, your game will not be accepted.

## Collision detection

You can take this collission detection code as a reference. It's a simple way to detect if two objects are colliding.

```javascript
function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}
```

We also saw another method in class:

```javascript
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
    enemy.element.remove();
  }
});
```

To use this method, you need to have the `x`, `y`, `width` and `height` properties in your objects. Try to debug and `console.log` those values to understand how it works. Remember the process we followed in class to adapt this code to our game. It wasn't easy, but doing it step by step we were able to make it work.

Remember to keep it simple and try to not repeat the same code over and over. If you are repeating the same code, you can create a function to handle it. Follow the DRY principle (Don't Repeat Yourself) and your code will be much cleaner and easier to maintain.