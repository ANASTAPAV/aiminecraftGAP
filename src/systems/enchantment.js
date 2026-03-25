// Enchantment System for Item Enchantments

class Enchantment {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

class Item {
    constructor(name) {
        this.name = name;
        this.enchantments = [];
    }

    addEnchantment(enchantment) {
        this.enchantments.push(enchantment);
    }

    describe() {
        let description = `Item: ${this.name}\nEnchantments: `;
        this.enchantments.forEach(enchantment => {
            description += `${enchantment.name} Level ${enchantment.level}, `;
        });
        return description.slice(0, -2);
    }
}

// Sample Enchantments
const sharpness = new Enchantment('Sharpness', 3);
const efficiency = new Enchantment('Efficiency', 2);
const protection = new Enchantment('Protection', 4);
const flame = new Enchantment('Flame', 1);
const knockback = new Enchantment('Knockback', 2);

// Sample Item
const sword = new Item('Diamond Sword');
sword.addEnchantment(sharpness);
sword.addEnchantment(knockback);

console.log(sword.describe());

// Sample Item with multiple enchantments
const pickaxe = new Item('Diamond Pickaxe');
pickaxe.addEnchantment(efficiency);
pickaxe.addEnchantment(sharpness);

console.log(pickaxe.describe());
