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
      this.y += this.velocity
      if (
        this.y >=
        this.gameAreaHeight - this.element.getBoundingClientRect().height
      ) {
        this.y = this.gameAreaHeight - this.element.getBoundingClientRect().height;
      }
    } else if (this.direction === "up") {
      this.y -= this.velocity;
      if (this.y <= 0) {
        this.y = 0
      }
    }
    this.element.style.top = `${this.y}px`;
  }
}
