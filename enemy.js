class Enemy{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.velocity = 10;
        this.createElement();
    }

    createElement(){
        this.element = document.createElement('div');
        this.element.classList.add('enemy');
        this.element.style.right = `0px`;
        this.element.style.top = `${this.y}px`;
        document.querySelector('#game-area').appendChild(this.element);
    }

    move(){
        this.x += this.velocity;
        this.element.style.right = `${this.x}px`;
    }
}