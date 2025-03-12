// Game state
const gameState = {
    currentRound: 0,
    selectedMonsters: [],
    currentMonsterIndex: 0,
    playerResponses: {}
};

// Music element
const gameMusic = document.getElementById('game-music');
let currentMusic = null;

// Monster data with correct image paths
const monsters = [ 
    {
        id: 1,
        name: "Vlad the Vampire",
        image: "Assets/vampire.jpg",
        round1Dialogue: [
            "I've been alive for 500 years, but I've never seen anyone as enchanting as you.",
            "I promise I don't bite... unless you want me to."
        ],
        round2Dialogue: [
            "My castle in Transylvania has room for two, and I can show you the world by night.",
            "Blood isn't the only thing that makes my heart pump; your smile does too."
        ],
        winnerSpeech: "For centuries, I wandered the night alone, searching for something I couldn't name. Now I know what I was looking for all along - it was you. Your presence brings warmth to my cold existence. I promise to cherish you for all eternity, whether under moonlight or stars. My immortal heart beats only for you, my love."
    },
    {
        id: 2,
        name: "Wolfgang the Werewolf",
        image: "Assets/werewolf.jpg",
        round1Dialogue: [
            "I'm loyal to a fault and will always protect those I care about.",
            "I might be a bit wild during full moons, but I'm a real softie the rest of the month."
        ],
        round2Dialogue: [
            "My pack has already approved of you, which is rare for them.",
            "I promise to keep you warm during cold nights with my fur coat."
        ],
        winnerSpeech: "From the moment I caught your scent, I knew you were special. My wolf instincts have never led me astray, and they howl for you alone. I vow to protect you with every fiber of my being, to run alongside you through life's forests, and to be your loyal companion until my final breath. You've tamed the beast within me with nothing but your love."
    },
    {
        id: 3,
        name: "Gorgon Greta",
        image: "Assets/gorgon.jpg",
        round1Dialogue: [
            "People say my gaze is petrifying, but I only have eyes for you.",
            "My hair has a mind of its own sometimes, but they're all thinking about you."
        ],
        round2Dialogue: [
            "I've turned many men to stone, but you've turned my heart to mush.",
            "Dating me might be a little chaotic, but I promise it will never be boring."
        ],
        winnerSpeech: "Throughout my life, people have avoided my gaze, feared my presence, but you saw beyond the snakes and stone. You've shown me what it means to be truly seen, to be accepted for all that I am. I don't need to turn you to stone to keep you forever - your love has already made this moment eternal. Every snake on my head agrees: we've found our perfect match in you."
    },
    {
        id: 4,
        name: "Franklyn the Monster",
        image: "Assets/frank.jpg",
        round1Dialogue: [
            "I'm made up of different parts, but my heart is whole and it beats for you.",
            "My creator may have abandoned me, but I won't ever abandon someone I care about."
        ],
        round2Dialogue: [
            "I may be pieced together, but with you I feel whole for the first time.",
            "I know I don't look conventional, but I promise my feelings for you are genuine."
        ],
        winnerSpeech: "They call me a monster, an abomination of science, but in your eyes, I found recognition of my humanity. Your touch doesn't flinch from my scars, your smile doesn't fade at my appearance. Though I was created in a laboratory, the love I feel for you is the most natural thing in this world. I offer you my patchwork heart, sewn together but beating true, devoted solely to you forever."
    },
    {
        id: 5,
        name: "Mummy Mia",
        image: "Assets/mummy.jpg",
        round1Dialogue: [
            "I've been wrapped up in my thoughts about you since we first met.",
            "Age is just a number, and mine is just a few thousand years."
        ],
        round2Dialogue: [
            "I've got treasures from ancient Egypt, but none compare to the treasure of your company.",
            "I may be preserved, but my feelings for you are fresh and real."
        ],
        winnerSpeech: "After thousands of years in darkness, you've unwrapped my bandaged heart and exposed it to the light of love again. I have witnessed empires rise and fall, but nothing compares to the empire we could build together. Time has no hold on my affection for you - it has survived centuries and will endure for countless more. My ancient soul recognizes yours as if we've known each other across millennia."
    },
    {
        id: 6,
        name: "Ghoulia",
        image: "Assets/ghoul.jpg",
        round1Dialogue: [
            "I may be partially ethereal, but my feelings for you are completely solid.",
            "I'm known for haunting places, but it's your smile that haunts my thoughts."
        ],
        round2Dialogue: [
            "Unlike other ghouls, I don't feed on fear - I thrive on affection and care.",
            "I promise I'm much more fun at parties than my ghostly appearance suggests."
        ],
        winnerSpeech: "They say ghouls are caught between worlds, neither fully here nor there, but with you I feel present in a way I never thought possible. Your soul shines so brightly it illuminates even my shadowy existence. I no longer wish to wander aimlessly - you have become my anchor, my purpose, my afterlife's meaning. I will float by your side through every joy and sorrow, an eternal companion bound by love stronger than death itself."
    },
    {
        id: 7,
        name: "Swamp Thing Sam",
        image: "Assets/swamp.jpg",
        round1Dialogue: [
            "I may live in a swamp, but I clean up nice for special occasions.",
            "My skin is mossy, but I promise I'm not as prickly as I look."
        ],
        round2Dialogue: [
            "I'm connected to all plant life, so I'll always know which flowers you like best.",
            "Life with me would be lush and full of growth, both literally and figuratively."
        ],
        winnerSpeech: "From the murky depths of my swamp, you called forth something beautiful I didn't know existed within me. Like a lotus blooming in unexpected waters, my love for you emerged pure and perfect. I offer you not gold or jewels, but fertile soil where our love can root and flourish. Every vine that curls around my limbs reaches for you, every leaf turns toward your light. In the ecosystem of my heart, you are the essential element."
    },
    {
        id: 8,
        name: "Cyclops Cynthia",
        image: "Assets/cyclops.jpg",
        round1Dialogue: [
            "I may have only one eye, but I see everything wonderful about you clearly.",
            "Dating me means you'll never have to worry about me looking at anyone else."
        ],
        round2Dialogue: [
            "My gaze is intense because all my focus is concentrated in one eye - and it's fixed on you.",
            "My cousins are a bit primitive, but I promise I'm cultured and gentle."
        ],
        winnerSpeech: "With my single eye, I've witnessed the wonders of the world, gazed upon breathtaking vistas, and observed the passage of centuries. Yet nothing has captivated my vision like you. You are the focal point around which my universe now revolves. I see you - truly see you - not just your outer beauty but the radiance of your spirit. My depth perception may be lacking, but my perception of your worth is crystal clear. Let me look upon your face every morning for the rest of our days."
    },
    {
        id: 9,
        name: "Goblin Greg",
        image: "Assets/goblin.jpg",
        round1Dialogue: [
            "I might be small, but I've got a huge capacity for love and mischief.",
            "I collect shiny things, and your eyes are the shiniest I've ever seen."
        ],
        round2Dialogue: [
            "My cave is humble, but I've lined it with soft fabrics and pretty stones just for you.",
            "Goblins are known for our loyalty - once we choose someone, it's for life."
        ],
        winnerSpeech: "Under moonlight, while other goblins sought gold and jewels, I found you - the greatest treasure of all. They laughed at me for pursuing someone so far above my station, but true worth isn't measured by height or appearance. The caverns of my heart echo with your name, each chamber filled with adoration for you. I may not have the grace of elves or the power of dragons, but my clever hands will build us a life filled with whimsy and wonder. Choose me, and I'll devote every ounce of my goblin ingenuity to your happiness."
    },
    {
        id: 10,
        name: "Zombie Zack",
        image: "Assets/zombie.jpg",
        round1Dialogue: [
            "People think I only care about brains, but what I really value is a heart connection.",
            "I may move slowly, but I fall in love fast and forever."
        ],
        round2Dialogue: [
            "Being undead gives you a new perspective on life - I don't take a single moment for granted.",
            "My body might be decomposing, but my feelings for you grow stronger every day."
        ],
        winnerSpeech: "They say zombies can't feel, that we're just empty shells walking the earth - but they're wrong. Meeting you awakened something within me that even death couldn't extinguish. My heart may not beat in the traditional sense, but it lurches and twists whenever you're near. I promise to shuffle by your side through apocalypse and calm alike. While others might decay with time, my devotion to you will remain eternally fresh. In a world of endings, you gave me a new beginning."
    }
];

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showTitleScreen();
});

// Show the title screen
function showTitleScreen() {
    const gameScreen = document.getElementById('game-screen');
    const gameControls = document.getElementById('game-controls');
    
    // Hide the regular game title
    document.getElementById('game-title').style.display = 'none';
    
    gameScreen.innerHTML = `
        <div class="title-screen">
            <h1>Monster Bachelor</h1>
            <div class="title-rose">🌹</div>
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn-large start-button" onclick="startGameFromTitle()">
            Start Game
        </button>
    `;
}

// Start game from title screen
function startGameFromTitle() {
    // Show the regular game title again
    document.getElementById('game-title').style.display = 'block';
    
    // Start the music
    gameMusic.volume = 0.7;
    gameMusic.play();
    currentMusic = gameMusic;
    
    // Start the game
    startGame();
}

function startGame() {
    gameState.currentRound = 1;
    renderRound1Selection();
}

// Render the initial screen with 10 monster tiles for selection
function renderRound1Selection() {
    const gameScreen = document.getElementById('game-screen');
    const gameControls = document.getElementById('game-controls');
    
    gameScreen.innerHTML = `
        <h2>Round 1: Choose 5 Monsters</h2>
        <p>Select 5 monsters you'd like to date in the first round.</p>
        <div class="monster-grid">
            ${monsters.map(monster => `
                <div class="monster-card" data-id="${monster.id}" onclick="toggleMonsterSelection(${monster.id})">
                    <img src="${monster.image}" alt="${monster.name}">
                    <div class="monster-name">${monster.name}</div>
                    <div class="selection-rose">🌹</div>
                </div>
            `).join('')}
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn-large" id="continue-btn" disabled onclick="startRound1Conversations()">
            Continue with 5 Selected <span class="selected-count">(0/5)</span>
        </button>
    `;
}

// Toggle monster selection and update the selected count
function toggleMonsterSelection(monsterId) {
    const monsterCard = document.querySelector(`.monster-card[data-id="${monsterId}"]`);
    const continueBtn = document.getElementById('continue-btn');
    const selectedCountSpan = document.querySelector('.selected-count');
    
    if (monsterCard.classList.contains('selected')) {
        // Unselect monster
        monsterCard.classList.remove('selected');
        gameState.selectedMonsters = gameState.selectedMonsters.filter(id => id !== monsterId);
    } else {
        // Only allow selecting if less than 5 are already selected
        if (gameState.selectedMonsters.length < 5) {
            monsterCard.classList.add('selected');
            gameState.selectedMonsters.push(monsterId);
        } else {
            // Maybe show a message that only 5 can be selected
            return;
        }
    }
    
    // Update selected count and button state
    selectedCountSpan.textContent = `(${gameState.selectedMonsters.length}/5)`;
    continueBtn.disabled = gameState.selectedMonsters.length !== 5;
}

// Start round 1 conversations
function startRound1Conversations() {
    gameState.currentMonsterIndex = 0;
    renderConversation(1);
}

// Render conversation with the current monster
function renderConversation(round) {
    const monsterId = gameState.selectedMonsters[gameState.currentMonsterIndex];
    const monster = monsters.find(m => m.id === monsterId);
    const dialogue = round === 1 ? monster.round1Dialogue : monster.round2Dialogue;
    
    const gameScreen = document.getElementById('game-screen');
    const gameControls = document.getElementById('game-controls');
    
    gameScreen.innerHTML = `
        <h2>Date with ${monster.name}</h2>
        <div class="conversation-container">
            <div class="monster-speech">
                <div class="monster-speech-header">
                    <img src="${monster.image}" alt="${monster.name}">
                    <h3>${monster.name}</h3>
                </div>
                <div class="speech-bubble">
                    <p>${dialogue[0]}</p>
                    <p>${dialogue[1]}</p>
                </div>
            </div>
        </div>
    `;
    
    gameControls.innerHTML = `
        <div class="response-buttons">
            <button class="btn" onclick="respondToMonster('Wow!')">Wow!</button>
            <button class="btn btn-secondary" onclick="respondToMonster('Womp womp.')">Womp womp.</button>
        </div>
    `;
}

// Process player's response to a monster
function respondToMonster(response) {
    const monsterId = gameState.selectedMonsters[gameState.currentMonsterIndex];
    
    // Save the response
    if (!gameState.playerResponses[monsterId]) {
        gameState.playerResponses[monsterId] = [];
    }
    gameState.playerResponses[monsterId].push(response);
    
    // Move to the next monster or to selection
    gameState.currentMonsterIndex++;
    
    if (gameState.currentRound === 1) {
        if (gameState.currentMonsterIndex < gameState.selectedMonsters.length) {
            renderConversation(1);
        } else {
            renderRound1Selection2();
        }
    } else if (gameState.currentRound === 2) {
        if (gameState.currentMonsterIndex < gameState.selectedMonsters.length) {
            renderConversation(2);
        } else {
            renderRound2Selection();
        }
    }
}

// Render the screen to select 3 monsters for round 2
function renderRound1Selection2() {
    const gameScreen = document.getElementById('game-screen');
    const gameControls = document.getElementById('game-controls');
    
    gameScreen.innerHTML = `
        <h2>Choose 3 Monsters for Round 2</h2>
        <p>Select 3 monsters you'd like to continue dating.</p>
        <div class="monster-grid">
            ${gameState.selectedMonsters.map(monsterId => {
                const monster = monsters.find(m => m.id === monsterId);
                return `
                    <div class="monster-card" data-id="${monster.id}" onclick="toggleRound2Selection(${monster.id})">
                        <img src="${monster.image}" alt="${monster.name}">
                        <div class="monster-name">${monster.name}</div>
                        <div class="selection-rose">🌹</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn-large" id="continue-btn" disabled onclick="startRound2()">
            Continue with 3 Selected <span class="selected-count">(0/3)</span>
        </button>
    `;
    
    // Reset selected monsters for round 2
    gameState.selectedMonsters = [];
}

// Toggle round 2 monster selection
function toggleRound2Selection(monsterId) {
    const monsterCard = document.querySelector(`.monster-card[data-id="${monsterId}"]`);
    const continueBtn = document.getElementById('continue-btn');
    const selectedCountSpan = document.querySelector('.selected-count');
    
    if (monsterCard.classList.contains('selected')) {
        // Unselect monster
        monsterCard.classList.remove('selected');
        gameState.selectedMonsters = gameState.selectedMonsters.filter(id => id !== monsterId);
    } else {
        // Only allow selecting if less than 3 are already selected
        if (gameState.selectedMonsters.length < 3) {
            monsterCard.classList.add('selected');
            gameState.selectedMonsters.push(monsterId);
        } else {
            // Maybe show a message that only 3 can be selected
            return;
        }
    }
    
    // Update selected count and button state
    selectedCountSpan.textContent = `(${gameState.selectedMonsters.length}/3)`;
    continueBtn.disabled = gameState.selectedMonsters.length !== 3;
}

// Start round 2
function startRound2() {
    gameState.currentRound = 2;
    gameState.currentMonsterIndex = 0;
    renderConversation(2);
    playMusic();
}

// Render the screen to select the final winner
function renderRound2Selection() {
    const gameScreen = document.getElementById('game-screen');
    const gameControls = document.getElementById('game-controls');
    
    gameScreen.innerHTML = `
        <h2>Choose Your Final Match!</h2>
        <p>Select the monster who has stolen your heart.</p>
        <div class="monster-grid">
            ${gameState.selectedMonsters.map(monsterId => {
                const monster = monsters.find(m => m.id === monsterId);
                return `
                    <div class="monster-card" data-id="${monster.id}" onclick="toggleFinalSelection(${monster.id})">
                        <img src="${monster.image}" alt="${monster.name}">
                        <div class="monster-name">${monster.name}</div>
                        <div class="selection-rose">🌹</div>
                    </div>
                `;
            }).join('')}
        </div>
        <div id="confirmation-container"></div>
    `;
    
    gameControls.innerHTML = '';
}

function toggleFinalSelection(monsterId) {
    // If there's already a confirmation dialog, don't create another one
    if (document.querySelector('.final-confirmation')) {
        return;
    }

    // Clear any previous selections
    document.querySelectorAll('.monster-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select the clicked monster
    const monsterCard = document.querySelector(`.monster-card[data-id="${monsterId}"]`);
    monsterCard.classList.add('selected');
    
    // Show confirmation dialog
    const monster = monsters.find(m => m.id === monsterId);
    const confirmationContainer = document.getElementById('confirmation-container');
    confirmationContainer.innerHTML = `
        <div class="final-confirmation">
            <div class="confirmation-box">
                <h3>Give your final rose to ${monster.name}?</h3>
                <div class="confirmation-buttons">
                    <button class="btn" onclick="selectWinner(${monsterId})">Yes, I choose them!</button>
                    <button class="btn btn-secondary" onclick="cancelFinalSelection()">No, not yet</button>
                </div>
            </div>
        </div>
    `;
}

function cancelFinalSelection() {
    // Remove confirmation dialog
    const confirmationContainer = document.getElementById('confirmation-container');
    confirmationContainer.innerHTML = '';
    
    // Clear selection
    document.querySelectorAll('.monster-card').forEach(card => {
        card.classList.remove('selected');
    });
}

// Update the selectWinner function to remove the confirmation dialog
function selectWinner(monsterId) {
    const monster = monsters.find(m => m.id === monsterId);
    
    const gameScreen = document.getElementById('game-screen');
    const gameControls = document.getElementById('game-controls');
    
    gameScreen.innerHTML = `
        <div class="winner-screen">
            <h2>Congratulations! You've Found Love with...</h2>
            <h1>${monster.name}</h1>
            <img src="${monster.image}" alt="${monster.name}">
            <div class="speech-bubble winner-speech">
                <p>${monster.winnerSpeech}</p>
            </div>
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn-large" onclick="startGame()">Play Again</button>
    `;
    
    // Play music
    playMusic();
    
    // Add some heart animations
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createHeartAnimation();
        }, i * 300);
    }
}

// Create a heart animation element
function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.classList.add('heart-animation');
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.top = `${Math.random() * 60 + 20}%`;
    document.querySelector('.winner-screen').appendChild(heart);
    
    // Remove the heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Play music (simplified to just play/pause the one track)
function playMusic() {
    if (currentMusic) {
        currentMusic.play().catch(e => {
            console.log("Music autoplay failed, will try again on user interaction", e);
        });
    }
}

// Make functions available globally
window.toggleMonsterSelection = toggleMonsterSelection;
window.startRound1Conversations = startRound1Conversations;
window.respondToMonster = respondToMonster;
window.toggleRound2Selection = toggleRound2Selection;
window.startRound2 = startRound2;
window.selectWinner = selectWinner;
window.toggleFinalSelection = toggleFinalSelection;
window.cancelFinalSelection = cancelFinalSelection; 