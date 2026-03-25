// player.js - Player Mechanics, Controls, and Movement

class Player {
    constructor(name) {
        this.name = name;
        this.position = { x: 0, y: 0, z: 0 };
        this.speed = 1;
        this.health = 100;
    }

    move(direction) {
        switch (direction) {
            case 'forward':
                this.position.z += this.speed;
                break;
            case 'backward':
                this.position.z -= this.speed;
                break;
            case 'left':
                this.position.x -= this.speed;
                break;
            case 'right':
                this.position.x += this.speed;
                break;
            case 'jump':
                this.position.y += this.speed;
                break;
            case 'fall':
                this.position.y -= this.speed;
                break;
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        if (this.health < 0) this.health = 0;
    }

    heal(amount) {
        this.health += amount;
        if (this.health > 100) this.health = 100;
    }

    getHealth() {
        return this.health;
    }
}

// Example usage:
const player = new Player('Hero');
console.log(player);

// Simulate player movement
player.move('forward');
console.log(player.position);
