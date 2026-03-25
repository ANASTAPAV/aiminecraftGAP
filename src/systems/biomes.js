'use strict';

class Biome {
    constructor(name) {
        this.name = name;
    }
}

class BiomeManager {
    constructor() {
        this.biomes = [];
    }

    addBiome(biome) {
        this.biomes.push(biome);
    }

    getBiomes() {
        return this.biomes;
    }
}

// Creating instances of different biomes
const forest = new Biome('Forest');
const desert = new Biome('Desert');
const snow = new Biome('Snow');
const ocean = new Biome('Ocean');
const mountain = new Biome('Mountain');

// Using BiomeManager to manage biomes
const biomeManager = new BiomeManager();
biomeManager.addBiome(forest);
biomeManager.addBiome(desert);
biomeManager.addBiome(snow);
biomeManager.addBiome(ocean);
biomeManager.addBiome(mountain);

module.exports = biomeManager;