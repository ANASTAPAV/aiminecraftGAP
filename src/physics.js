// collision.js - Collision detection and physics system for Minecraft-like game

class PhysicsSystem {
    constructor(gravity = 9.81) {
        this.gravity = gravity;
        this.objects = [];
    }

    addObject(obj) {
        this.objects.push(obj);
    }

    update(deltaTime) {
        for (const obj of this.objects) {
            this.applyGravity(obj, deltaTime);
            this.checkCollisions(obj);
        }
    }

    applyGravity(obj, deltaTime) {
        if (!obj.isStatic) {
            obj.velocity.y -= this.gravity * deltaTime;
            obj.position.y += obj.velocity.y * deltaTime;
        }
    }

    checkCollisions(obj) {
        for (const other of this.objects) {
            if (obj !== other && this.isColliding(obj, other)) {
                this.resolveCollision(obj, other);
            }
        }
    }

    isColliding(a, b) {
        return (a.position.x < b.position.x + b.width &&
                a.position.x + a.width > b.position.x &&
                a.position.y < b.position.y + b.height &&
                a.position.y + a.height > b.position.y);
    }

    resolveCollision(a, b) {
        // Basic collision resolution algorithm
        const overlapX = Math.min(a.position.x + a.width - b.position.x, b.position.x + b.width - a.position.x);
        const overlapY = Math.min(a.position.y + a.height - b.position.y, b.position.y + b.height - a.position.y);

        if (overlapX < overlapY) {
            a.position.x += (a.position.x < b.position.x) ? -overlapX : overlapX;
        } else {
            a.position.y += (a.position.y < b.position.y) ? -overlapY : overlapY;
        }
    }
}

// Example usage
const physics = new PhysicsSystem();

const player = {
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    width: 1,
    height: 1,
    isStatic: false,
};

const block = {
    position: { x: 1, y: -1 },
    width: 1,
    height: 1,
    isStatic: true,
};

physics.addObject(player);
physics.addObject(block);

const deltaTime = 1/60; // Placeholder for actual delta time
physics.update(deltaTime);

