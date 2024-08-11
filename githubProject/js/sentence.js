const sentences = [
    { korean: '저는 학교에 갑니다.', words: ['저는', '학교에', '갑니다.'] },
    { korean: '그는 커피를 마십니다.', words: ['그는', '커피를', '마십니다.'] },
    { korean: '우리는 친구입니다.', words: ['우리는', '친구입니다.'] },
];

let currentSentence;
let shuffledWords = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGame() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    currentSentence = sentences[randomIndex];
    shuffledWords = [...currentSentence.words];
    shuffle(shuffledWords);

    const wordBank = document.getElementById('wordBank');
    wordBank.innerHTML = '';
    shuffledWords.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.draggable = true;
        wordElement.textContent = word;
        wordElement.addEventListener('dragstart', dragStart);
        wordBank.appendChild(wordElement);
    });

    const sentenceDrop = document.getElementById('sentenceDrop');
    sentenceDrop.innerHTML = '';
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const wordElement = document.createElement('div');
    wordElement.className = 'word';
    wordElement.textContent = data;
    event.target.appendChild(wordElement);
}

function checkSentence() {
    const sentenceDrop = document.getElementById('sentenceDrop');
    const droppedWords = Array.from(sentenceDrop.getElementsByClassName('word')).map(word => word.textContent);
    const feedback = document.getElementById('feedback');

    if (droppedWords.join(' ') === currentSentence.words.join(' ')) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}

function resetGame() {
    const sentenceDrop = document.getElementById('sentenceDrop');
    sentenceDrop.innerHTML = '';
    createGame();
}

document.getElementById('sentenceDrop').addEventListener('dragover', allowDrop);
document.getElementById('sentenceDrop').addEventListener('drop', drop);

window.onload = createGame;
