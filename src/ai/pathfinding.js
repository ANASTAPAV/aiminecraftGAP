class Node {
    constructor(x, y) {
        this.x = x;  // Node's x coordinate
        this.y = y;  // Node's y coordinate
        this.g = 0;   // Cost from start to this node
        this.h = 0;   // Heuristic for this node
        this.f = 0;   // Total cost
        this.parent = null; // Node from which this node came
    }
}

class Pathfinder {
    constructor(grid) {
        this.grid = grid; // 2D array of Node
    }

    heuristic(a, b) {
        // Using Manhattan distance as heuristic
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    findPath(start, end) {
        let openList = [];
        let closedList = [];
        openList.push(start);

        while (openList.length > 0) {
            let currentNode = openList[0];
            for (let i = 1; i < openList.length; i++) {
                if (openList[i].f < currentNode.f) {
                    currentNode = openList[i];
                }
            }

            openList.splice(openList.indexOf(currentNode), 1);
            closedList.push(currentNode);

            // Found the path
            if (currentNode.x === end.x && currentNode.y === end.y) {
                let path = [];
                let temp = currentNode;
                while (temp) {
                    path.push(temp);
                    temp = temp.parent;
                }
                return path.reverse(); // Return reversed path
            }

            // Get neighbors
            let neighbors = this.getNeighbors(currentNode);
            for (let neighbor of neighbors) {
                if (closedList.includes(neighbor)) {
                    continue; // Ignore the neighbor which is already evaluated
                }

                let gCost = currentNode.g + 1; // 1 is distance to neighbor
                if (!openList.includes(neighbor)) {
                    openList.push(neighbor); // Discover a new node
                } else if (gCost >= neighbor.g) {
                    continue; // Not a better path
                }

                // Update the neighbor's parent and costs
                neighbor.parent = currentNode;
                neighbor.g = gCost;
                neighbor.h = this.heuristic(neighbor, end);
                neighbor.f = neighbor.g + neighbor.h;
            }
        }
        return []; // Return empty array if no path is found
    }

    getNeighbors(node) {
        let neighbors = [];
        let directions = [
            { x: 0, y: 1 }, // Down
            { x: 1, y: 0 }, // Right
            { x: 0, y: -1 }, // Up
            { x: -1, y: 0 } // Left
        ];
        for (let direction of directions) {
            let newX = node.x + direction.x;
            let newY = node.y + direction.y;
            if (newX >= 0 && newY >= 0 && newX < this.grid.length && newY < this.grid[0].length) {
                neighbors.push(this.grid[newX][newY]);
            }
        }
        return neighbors;
    }
}

// Export the classes for use in other modules
module.exports = { Node, Pathfinder };