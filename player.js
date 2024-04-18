class Player {
  constructor(gameAreaElement) {
    this.element = document.querySelector("#player");
    this.x = 0;
    this.y = 0;
    this.direction = null;
    this.velocity = 10;
    this.gameAreaHeight = gameAreaElement.getBoundingClientRect().height;
  }

  move() {
    if (this.direction === "down") {
      if (
        this.y <
        this.gameAreaHeight - this.element.getBoundingClientRect().height
      ) {
        this.y += this.velocity;
      }
    } else if (this.direction === "up") {
      if (this.y > 0) {
        this.y -= this.velocity;
      }
    }
    this.element.style.top = `${this.y}px`;
  }
}
