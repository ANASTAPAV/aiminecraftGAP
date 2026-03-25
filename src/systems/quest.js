class Quest {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isActive = false;
        this.isCompleted = false;
    }

    start() {
        this.isActive = true;
        console.log(`Quest '${this.title}' has started.`);
    }

    complete() {
        this.isActive = false;
        this.isCompleted = true;
        console.log(`Quest '${this.title}' has been completed.`);
    }
}

class QuestManager {
    constructor() {
        this.quests = [];
    }

    createQuest(title, description) {
        const quest = new Quest(title, description);
        this.quests.push(quest);
        console.log(`Quest '${title}' created.`);
        return quest;
    }

    startQuest(quest) {
        quest.start();
    }

    completeQuest(quest) {
        quest.complete();
    }
}

// Example Usage
const questManager = new QuestManager();
const newQuest = questManager.createQuest('Find the Lost Artifact', 'Search for the artifact hidden in the ancient ruins.');
questManager.startQuest(newQuest);
questManager.completeQuest(newQuest);
