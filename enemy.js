class Enemy {
  constructor() {
    this.velocity = 8;
    this.gameAreaElement = document.querySelector("#game-area");
    this.gameAreaHeight = this.gameAreaElement.getBoundingClientRect().height;
    this.gameAreaWidth = this.gameAreaElement.getBoundingClientRect().width;
    this.x = this.gameAreaWidth;
    this.y = 0;
    // we call the method to create the element and all its properties
    this.createElement();
  }
  // in this case enemies are created after a certain amount of time, so we have to create the element
  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("enemy");
    // remember the bug we had in class? We have to append the element to the game area before we can get its width and height!
    this.gameAreaElement.appendChild(this.element);
    // the initial vertical position of the enemy is random
    this.y = Math.floor(
      Math.random() *
        (this.gameAreaHeight - this.element.getBoundingClientRect().height) -
        this.element.getBoundingClientRect().height
    );
    this.height = this.element.getBoundingClientRect().height;
    this.width = this.element.getBoundingClientRect().width;
    this.element.style.top = `${this.y}px`;
  }

  move() {
    // to make them move it's actually pretty simple, we just have to decrease the x position and remove the element when it's out of the screen. But how do we delete the element from the array? 🤔
    this.x -= this.velocity;
    this.element.style.left = `${this.x}px`;
    if (this.x > this.gameAreaWidth) {
      this.element.remove();
    }
  }
}
