// Hangman game using event-driven approach

// let wordToGuess = "example";
// let guessedLetters = [];
// let remainingAttempts = 6;
// let timeLeft = 30; // 30 seconds countdown
// let timerInterval;
// let timerStarted = false; // To track whether the timer has started

// const guessButton = document.getElementById('guessButton');
// const inputField = document.getElementById('inputField');
// const displayWord = document.getElementById('displayWord');
// const messageBox = document.getElementById('messageBox');
// const timerDisplay = document.getElementById('timer');
// const resetButton = document.getElementById('resetButton');

// function updateDisplayWord() {
//     let display = wordToGuess.split('').map(letter => 
//         guessedLetters.includes(letter) ? letter : "_"
//     ).join(' ');
//     displayWord.textContent = display;
// }

// function startTimer() {
//     timerInterval = setInterval(() => {
//         timeLeft--;
//         timerDisplay.textContent = `Time left: ${timeLeft}s`;

//         if (timeLeft <= 0) {
//             clearInterval(timerInterval); // Stop the timer
//             messageBox.textContent = "Time's up! Game over.";
//             guessButton.disabled = true; // Disable further guesses
//         }
//     }, 1000);
// }

// function endGame(message) {
//     clearInterval(timerInterval); // Stop the timer
//     messageBox.textContent = message;
//     guessButton.disabled = true; // Disable further guesses
// }

// function checkGuess() {
//     if (!timerStarted) { // Start the timer only on the first guess
//         startTimer();
//         timerStarted = true;
//     }

//     const guess = inputField.value.toLowerCase();
//     inputField.value = ''; // Clear input field after each guess

//     if (guessedLetters.includes(guess) || guess.length !== 1) {
//         messageBox.textContent = "Invalid guess or already guessed!";
//         return;
//     }

//     guessedLetters.push(guess);

//     if (!wordToGuess.includes(guess)) {
//         remainingAttempts--;
//         messageBox.textContent = `Incorrect! Attempts left: ${remainingAttempts}`;
//     } else {
//         messageBox.textContent = "Good guess!";
//     }

//     updateDisplayWord();

//     if (remainingAttempts <= 0) {
//         endGame("Game over! The word was: " + wordToGuess);
//     } else if (wordToGuess.split('').every(letter => guessedLetters.includes(letter))) {
//         endGame("Congratulations! You guessed the word!");
//     }
// }

// function resetGame() {
//     clearInterval(timerInterval); // Stop any ongoing timer
//     wordToGuess = "example"; // Reset to a new word if desired
//     guessedLetters = [];
//     remainingAttempts = 6;
//     timeLeft = 30;
//     timerStarted = false; // Reset the timer started flag
//     guessButton.disabled = false; // Enable the guess button
//     inputField.value = ''; // Clear input field
//     messageBox.textContent = ''; // Clear any messages
//     timerDisplay.textContent = `Time left: ${timeLeft}s`; // Reset timer display
//     updateDisplayWord(); // Reset word display
// }

// guessButton.addEventListener('click', checkGuess);
// resetButton.addEventListener('click', resetGame);
// updateDisplayWord(); // Initial display



//hangman with categories

let wordToGuess;
let guessedLetters = [];
let remainingAttempts = 6;
let timeLeft = 30; // 30 seconds countdown
let timerInterval;
let timerStarted = false; // To track whether the timer has started
const categories = {
    animals: ["lion", "tiger", "elephant", "giraffe"],
    fruits: ["apple", "banana", "orange", "grape"],
    countries: ["canada", "brazil", "japan", "italy"]
};
let selectedCategory = 'animals'; // Default category

const guessButton = document.getElementById('guessButton');
const inputField = document.getElementById('inputField');
const displayWord = document.getElementById('displayWord');
const messageBox = document.getElementById('messageBox');
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');
const categorySelector = document.getElementById('categorySelector');

function getRandomWord(category) {
    const words = categories[category];
    return words[Math.floor(Math.random() * words.length)];
}

function updateDisplayWord() {
    let display = wordToGuess.split('').map(letter => 
        guessedLetters.includes(letter) ? letter : "_"
    ).join(' ');
    displayWord.textContent = display;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Stop the timer
            messageBox.textContent = "Time's up! Game over.";
            guessButton.disabled = true; // Disable further guesses
        }
    }, 1000);
}

function endGame(message) {
    clearInterval(timerInterval); // Stop the timer
    messageBox.textContent = message;
    guessButton.disabled = true; // Disable further guesses
}

function checkGuess() {
    if (!timerStarted) { // Start the timer only on the first guess
        startTimer();
        timerStarted = true;
    }

    const guess = inputField.value.toLowerCase();
    inputField.value = ''; // Clear input field after each guess

    if (guessedLetters.includes(guess) || guess.length !== 1) {
        messageBox.textContent = "Invalid guess or already guessed!";
        return;
    }

    guessedLetters.push(guess);

    if (!wordToGuess.includes(guess)) {
        remainingAttempts--;
        messageBox.textContent = `Incorrect! Attempts left: ${remainingAttempts}`;
    } else {
        messageBox.textContent = "Good guess!";
    }

    updateDisplayWord();

    if (remainingAttempts <= 0) {
        endGame("Game over! The word was: " + wordToGuess);
    } else if (wordToGuess.split('').every(letter => guessedLetters.includes(letter))) {
        endGame("Congratulations! You guessed the word!");
    }
}

function resetGame() {
    clearInterval(timerInterval); // Stop any ongoing timer
    wordToGuess = getRandomWord(selectedCategory); // Get a new random word
    guessedLetters = [];
    remainingAttempts = 6;
    timeLeft = 30;
    timerStarted = false; // Reset the timer started flag
    guessButton.disabled = false; // Enable the guess button
    inputField.value = ''; // Clear input field
    messageBox.textContent = ''; // Clear any messages
    timerDisplay.textContent = `Time left: ${timeLeft}s`; // Reset timer display
    updateDisplayWord(); // Reset word display
}

// Event listeners
guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

categorySelector.addEventListener('change', function() {
    selectedCategory = this.value; // Update selected category
    resetGame(); // Reset game with the new category
});

// Initialize game display
updateDisplayWord();



// // math problem

let correctAnswer1 = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let timeLeft1 = 30; // 30 seconds countdown
let timerInterval1;
let timerStarted1 = false; // To track whether the timer has started

const guessButton1 = document.getElementById('guessButton1');
const inputField1 = document.getElementById('inputField1');
const messageBox1 = document.getElementById('messageBox1');
const timerDisplay1 = document.getElementById('timer1');
const resetButton1 = document.getElementById('resetButton1'); // Reset button

function startTimer1() {
    timerInterval1 = setInterval(() => {
        timeLeft1--;
        timerDisplay1.textContent = `Time left: ${timeLeft1}s`;

        if (timeLeft1 <= 0) {
            clearInterval(timerInterval1); // Stop the timer
            messageBox1.textContent = `Time's up! Game over. ${correctAnswer1}`;
            guessButton1.disabled = true; // Disable further guesses
        }
    }, 1000);
}

function endGame1(message) {
    clearInterval(timerInterval1); // Stop the timer
    messageBox1.textContent = message;
    guessButton1.disabled = true; // Disable further guesses
}

function checkMathGuess() {
    if (!timerStarted1) { // Start the timer only on the first guess
        startTimer1();
        timerStarted1 = true;
    }

    const userGuess = parseInt(inputField1.value, 10);
    inputField1.value = ''; // Clear input field after each guess

    if (isNaN(userGuess)) {
        messageBox1.textContent = "Please enter a valid number.";
        return;
    }

    if (userGuess === correctAnswer1) {
        endGame1(`Correct! You guessed the number. ${correctAnswer1}`);
    } else if (userGuess > correctAnswer1) {
        messageBox1.textContent = "Too high! Try again.";
    } else {
        messageBox1.textContent = "Too low! Try again.";
    }
}

function resetGame1() {
    clearInterval(timerInterval1); // Stop any ongoing timer
    correctAnswer1 = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    timeLeft1 = 30; // Reset the timer
    timerStarted1 = false; // Reset the timer started flag
    guessButton1.disabled = false; // Enable the guess button
    inputField1.value = ''; // Clear input field
    messageBox1.textContent = ''; // Clear any messages
    timerDisplay1.textContent = `Time left: ${timeLeft1}s`; // Reset timer display
}

guessButton1.addEventListener('click', checkMathGuess);
resetButton1.addEventListener('click', resetGame1); // Add event listener to reset button

