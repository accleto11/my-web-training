const words = [
    '안녕하세요', // Hello
    '감사합니다', // Thank you
    '학교', // School
    '커피', // Coffee
    '컴퓨터', // Computer
    '친구', // Friend
    '가족', // Family
    '마시다', // Drink
    '말하다', // Speak
    '보다' // See
];

let selectedWord;
let displayedWord;
let incorrectGuesses;
const maxIncorrectGuesses = 6;

function initializeGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = Array(selectedWord.length).fill('_');
    incorrectGuesses = 0;

    document.getElementById('wordDisplay').textContent = displayedWord.join(' ');
    updateLetterButtons();
    updateHangmanImage();
    document.getElementById('status').textContent = 'Guess a letter!';
}

function updateLetterButtons() {
    const letterButtons = document.getElementById('letterButtons');
    letterButtons.innerHTML = '';
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.className = 'btn btn-secondary';
        button.onclick = () => guessLetter(letter);
        letterButtons.appendChild(button);
    }
}

function updateHangmanImage() {
    document.getElementById('hangmanImage').src = `hangman${incorrectGuesses}.png`;
}

function guessLetter(letter) {
    letter = letter.toLowerCase();
    const isCorrectGuess = selectedWord.includes(letter);

    if (isCorrectGuess) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                displayedWord[i] = letter;
            }
        }
        document.getElementById('wordDisplay').textContent = displayedWord.join(' ');

        if (!displayedWord.includes('_')) {
            document.getElementById('status').textContent = 'Congratulations! You guessed the word!';
        }
    } else {
        incorrectGuesses++;
        updateHangmanImage();
        
        if (incorrectGuesses >= maxIncorrectGuesses) {
            document.getElementById('status').textContent = `Game over! The word was: ${selectedWord}`;
        } else {
            document.getElementById('status').textContent = `Incorrect guess! You have ${maxIncorrectGuesses - incorrectGuesses} tries left.`;
        }
    }
}

function resetGame() {
    initializeGame();
}

window.onload = initializeGame;
