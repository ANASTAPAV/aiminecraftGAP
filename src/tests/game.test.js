const Game = require('../game');

describe('Game Engine Initialization', () => {
    test('should initialize the game engine', () => {
        const game = new Game();
        expect(game).toBeDefined();
    });
});

describe('Player Health', () => {
    test('should set initial player health', () => {
        const game = new Game();
        game.addPlayer('player1');
        const player = game.getPlayer('player1');
        expect(player.health).toBe(100);
    });
    
test('should reduce health when damage is taken', () => {
        const game = new Game();
        game.addPlayer('player1');
        const player = game.getPlayer('player1');
        player.takeDamage(30);
        expect(player.health).toBe(70);
    });
});

describe('Block Placement', () => {
    test('should place a block successfully', () => {
        const game = new Game();
        const result = game.placeBlock(1, 1, 'dirt');
        expect(result).toBe(true);
    });
});

describe('Collision Detection', () => {
    test('should detect collision with solid blocks', () => {
        const game = new Game();
        game.placeBlock(1, 1, 'stone');
        const result = game.detectCollision(1, 1);
        expect(result).toBe(true);
    });
});

describe('Inventory Management', () => {
    test('should add item to inventory', () => {
        const game = new Game();
        game.addPlayer('player1');
        const player = game.getPlayer('player1');
        player.addToInventory('wood');
        expect(player.inventory).toContain('wood');
    });
    
test('should remove item from inventory', () => {
        const game = new Game();
        game.addPlayer('player1');
        const player = game.getPlayer('player1');
        player.addToInventory('wood');
        player.removeFromInventory('wood');
        expect(player.inventory).not.toContain('wood');
    });
});
