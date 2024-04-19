class Player {
  constructor(gameAreaElement) {
    this.element = document.querySelector("#player");
    this.x = 0;
    this.y = 0;
    // Height and width are necessary to calculate collisions.
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;
    // The direction property is going to store the direction the player is moving. It is going to be updated when the user presses the "w" or "s" keys. That's why we are initializing it as null. (waiting for the user to press a key)
    this.direction = null;
    // If we store the velocity in the player class, we can change it to make the game harder or easier. 
    this.velocity = 12;
    this.gameAreaHeight = gameAreaElement.getBoundingClientRect().height;
  }

  move() {
    if (this.direction === "down") {
      // The player is moving down, so we need to increase the y position (the element has the top position as 0 at the beginning of the game)
      this.y += this.velocity;
      // The if statement is checking if the player is going to hit the bottom of the game area. If the player is going to hit the bottom, we set the y position to the bottom of the game area.
      if (
        this.y >=
        this.gameAreaHeight - this.element.getBoundingClientRect().height
      ) {
        this.y =
          this.gameAreaHeight - this.element.getBoundingClientRect().height;
      }
    } else if (this.direction === "up") {
      this.y -= this.velocity;
      // The if statement is checking if the player is going to hit the top of the game area. If the player is going to hit the top, we set the y position to the top of the game area.
      if (this.y <= 0) {
        this.y = 0;
      }
    }
    this.element.style.top = `${this.y}px`;
  }
  
}
