const words = [
    { english: 'Hello', korean: '안녕하세요' },
    { english: 'Thank you', korean: '감사합니다' },
    { english: 'School', korean: '학교' },
    { english: 'Coffee', korean: '커피' },
    { english: 'Computer', korean: '컴퓨터' },
    { english: 'Friend', korean: '친구' },
    { english: 'Family', korean: '가족' },
    { english: 'Drink', korean: '마시다' },
    { english: 'Speak', korean: '말하다' },
    { english: 'See', korean: '보다' }
];

let currentWordIndex = 0;

function showWord() {
    const englishWordElement = document.getElementById('english-word');
    const currentWord = words[currentWordIndex];
    englishWordElement.textContent = currentWord.english;
}

function checkAnswer() {
    const inputKorean = document.getElementById('input-korean').value.trim();
    const resultElement = document.getElementById('result');
    const currentWord = words[currentWordIndex];

    if (inputKorean === currentWord.korean) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Incorrect. The correct word is: ${currentWord.korean}`;
        resultElement.style.color = 'red';
    }
}

function nextWord() {
    checkAnswer();
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.getElementById('input-korean').value = '';
    showWord();
}

window.onload = showWord;