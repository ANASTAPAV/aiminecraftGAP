// mob/NPC spawning and AI system

class NPC {
    constructor(name, x, y) {
        this.name = name;
        this.position = { x: x, y: y };
        this.health = 100;
        this.alive = true;
    }

    move(newX, newY) {
        if (this.alive) {
            this.position.x = newX;
            this.position.y = newY;
            console.log(`${this.name} moved to (${newX}, ${newY}).`);
        }
    }

    takeDamage(amount) {
        if (this.alive) {
            this.health -= amount;
            console.log(`${this.name} took ${amount} damage!`);
            if (this.health <= 0) {
                this.alive = false;
                console.log(`${this.name} has died!`);
            }
        }
    }
}

class NPCManager {
    constructor() {
        this.npcs = [];
    }

    spawnNPC(name, x, y) {
        const npc = new NPC(name, x, y);
        this.npcs.push(npc);
        console.log(`${name} has been spawned at (${x}, ${y}).`);
        return npc;
    }

    updateNPCs() {
        this.npcs.forEach(npc => {
            if (npc.alive) {
                // AI logic would be implemented here
                console.log(`${npc.name} is alive at (${npc.position.x}, ${npc.position.y}).`);
            }
        });
    }
}

// Example usage:
const manager = new NPCManager();
const zombie = manager.spawnNPC('Zombie', 10, 20);
zombie.move(15, 25);
zombie.takeDamage(50);
zombie.takeDamage(60);
manager.updateNPCs();

