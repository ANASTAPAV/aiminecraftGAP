const fs = require('fs');

// Function to save game data
function saveGame(data, filename = 'savedGame.json') {
    fs.writeFileSync(filename, JSON.stringify(data), 'utf8');
    console.log('Game saved successfully.');
}

// Function to load game data
function loadGame(filename = 'savedGame.json') {
    if (fs.existsSync(filename)) {
        const data = fs.readFileSync(filename, 'utf8');
        console.log('Game loaded successfully.');
        return JSON.parse(data);
    } else {
        console.error('No saved game found.');
        return null;
    }
}

module.exports = { saveGame, loadGame };