# Monster Bachelor Dating Game

A fun, interactive dating simulation game where you date monster characters and choose your perfect match over three rounds, inspired by the TV show "The Bachelor."

## 🌹 Game Features

- Ten unique monster characters with distinct personalities
- Three-round dating format with dynamic monster conversations
- Interactive conversations with your monster suitors
- Atmospheric music that changes between game phases
- Beautifully designed UI with animations
- No special dependencies or installation required - runs in any modern browser

## 🧟‍♂️ How to Play

1. **Round 1**: Choose 5 monsters to date out of 10 potential suitors
2. Have brief conversations with each monster (they'll say 2 sentences)
3. Respond with "Wow!" or "Womp womp." to their conversation
4. Select 3 monsters to continue to Round 2

5. **Round 2**: Have deeper conversations with your 3 remaining monsters
6. Again, respond with "Wow!" or "Womp womp."
7. Choose your final match - the monster who stole your heart!

8. **Victory**: Your chosen monster will profess their undying love for you in a heartfelt speech

## 🎵 Music Controls

The game features background music that changes as you progress through the dating rounds:

- **First Track**: Plays during Round 1 selection and conversations
- **Second Track**: Plays during Round 2 dating phase 
- **Final Track**: Plays during the winner's love confession

Use the music controls at the bottom of the game to:
- Toggle music on/off
- Adjust volume
- See which track is currently playing

## 🚀 How to Run the Game

This game is built using pure HTML, CSS, and JavaScript, with no external dependencies, making it extremely easy to run:

1. Make sure you have all the required files and folders:
   - `index.html`
   - `styles.css`
   - `game.js`
   - `Assets/` folder containing:
     - Monster images: cyclops.jpg, frank.jpg, ghoul.jpg, goblin.jpg, gorgon.jpg, mummy.jpg, swamp.jpg, vampire.jpg, werewolf.jpg, zombie.jpg
     - Music files: round1.mp3, round2.mp3, ending.mp3

2. Simply open the `index.html` file in any modern web browser:
   - Double-click on the file
   - Or right-click and select "Open with" to choose your preferred browser
   - Or drag the file into an open browser window

That's it! The game will start automatically.

## 💻 Customizing the Game

### Adding Your Own Monster Images

If you want to replace the monster images:

1. Place your new images in the `Assets` folder
2. Make sure they have the same filenames as the originals (cyclops.jpg, frank.jpg, etc.)
   
Alternatively, you can modify the image paths in the `game.js` file:

```javascript
const monsters = [
    {
        id: 1,
        name: "Vlad the Vampire",
        image: "Assets/your-custom-image.jpg", // Replace with your custom image
        // ...
    },
    // ...
];
```

### Adding Custom Music

To replace the game music:

1. Place your new MP3 files in the `Assets` folder
2. Either name them the same as the originals (round1.mp3, round2.mp3, ending.mp3)
   
Or update the audio source tags in the HTML file:

```html
<audio id="intro-music" loop>
    <source src="Assets/your-custom-round1.mp3" type="audio/mpeg">
</audio>
<audio id="round2-music" loop>
    <source src="Assets/your-custom-round2.mp3" type="audio/mpeg">
</audio>
<audio id="finale-music" loop>
    <source src="Assets/your-custom-ending.mp3" type="audio/mpeg">
</audio>
```

Enjoy your monster dating adventure! 🌹 