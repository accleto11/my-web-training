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

    // Basic Consonants
    const consonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    consonants.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.className = 'btn btn-secondary letter-button';
        button.onclick = () => guessLetter(letter);
        letterButtons.appendChild(button);
    });

    // Basic Vowels
    const vowels = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    vowels.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.className = 'btn btn-secondary letter-button';
        button.onclick = () => guessLetter(letter);
        letterButtons.appendChild(button);
    });
}

function updateHangmanImage() {
    document.getElementById('hangmanImage').src = `images/hangman${incorrectGuesses}.png`;
}

function guessLetter(letter) {
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
