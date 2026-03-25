// Block System

class Block {
    constructor(type, properties) {
        this.type = type;
        this.properties = properties;
    }
}

const blockTypes = {
    GRASS: new Block('grass', { hardness: 1, color: 'green' }),
    STONE: new Block('stone', { hardness: 3, color: 'gray' }),
    DIRT: new Block('dirt', { hardness: 1, color: 'brown' }),
    WATER: new Block('water', { hardness: 0, color: 'blue' }),
};

// Export the block types
module.exports = blockTypes;