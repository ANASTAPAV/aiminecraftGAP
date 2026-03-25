class Inventory {
    constructor(size) {
        this.size = size;
        this.items = new Array(size).fill(null);
    }
    add(item) {
        const index = this.items.indexOf(null);
        if (index !== -1) {
            this.items[index] = item;
            return true;
        }
        return false; // Inventory full
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items[index] = null;
            return true;
        }
        return false; // Item not found
    }
    has(item) {
        return this.items.includes(item);
    }
    getItems() {
        return this.items.filter(item => item !== null);
    }
}

class Crafting {
    constructor() {
        this.recipes = {};
    }
    addRecipe(output, inputs) {
        this.recipes[output] = inputs;
    }
    craft(inventory, item) {
        const recipe = this.recipes[item];
        if (!recipe) return false; // No recipe found
        const canCraft = recipe.every(input => inventory.has(input));
        if (canCraft) {
            recipe.forEach(input => inventory.remove(input));
            inventory.add(item);
            return true;
        }
        return false; // Not enough materials
    }
}