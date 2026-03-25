// mobAI.js

class MobAI {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.target = null;
        this.state = 'wander';
    }

    // Pathfinding logic placeholder
    findPath(targetPosition) {
        // Implement pathfinding logic here to navigate the world
        return []; // Return an array of positions to follow
    }

    chase(target) {
        this.state = 'chase';
        const path = this.findPath(target.position);
        this.followPath(path);
    }

    wander() {
        this.state = 'wander';
        // Implement wandering behavior
    }

    followPath(path) {
        for (const position of path) {
            this.moveTo(position);
            if (this.state === 'attack') break;
        }
    }

    attack(target) {
        this.state = 'attack';
        // Implement attack logic here
    }

    moveTo(position) {
        // Logic to move the mob to the specified position
        this.position = position;
    }
}

// Usage Example:
const mob = new MobAI();
mob.wander(); // Start wandering

setTimeout(() => {
    mob.chase({ position: { x: 5, y: 5 } }); // Start chasing a target
}, 2000);