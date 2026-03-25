class Terrain {
    constructor(size) {
        this.size = size;
        this.world = this.generateWorld();
    }

    generateWorld() {
        const world = [];
        for (let i = 0; i < this.size; i++) {
            const row = [];
            for (let j = 0; j < this.size; j++) {
                row.push(this.generateBlock(i, j));
            }
            world.push(row);
        }
        return world;
    }

    generateBlock(x, y) {
        // Simple noise function to randomly generate terrain
        return Math.random() > 0.5 ? 'grass' : 'water';
    }
}

class World {
    constructor(size) {
        this.terrain = new Terrain(size);
    }

    render() {
        console.log(this.terrain.world);
    }
}

// Example usage:
const myWorld = new World(10);
myWorld.render();