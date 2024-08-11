const words = [
    { korean: '안녕하세요', english: 'Hello' },
    { korean: '감사합니다', english: 'Thank you' },
    { korean: '학교', english: 'School' },
    { korean: '커피', english: 'Coffee' },
    { korean: '컴퓨터', english: 'Computer' },
    { korean: '친구', english: 'Friend' },
    { korean: '가족', english: 'Family' },
    { korean: '마시다', english: 'Drink' },
    { korean: '말하다', english: 'Speak' },
    { korean: '보다', english: 'See' }
];

let shuffledWords = [];
let selectedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGameBoard() {
    const koreanWords = words.map(word => word.korean);
    const englishWords = words.map(word => word.english);
    shuffledWords = [...koreanWords, ...englishWords];
    shuffle(shuffledWords);
    
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    shuffledWords.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.dataset.word = word;
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    });
}

function flipCard(e) {
    const card = e.target;
    const word = card.dataset.word;
    const index = card.dataset.index;

    if (selectedCards.length < 2 && !card.classList.contains('matched') && !card.classList.contains('flipped')) {
        card.textContent = word;
        card.classList.add('flipped');
        selectedCards.push({ word, index, element: card });

        if (selectedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [firstCard, secondCard] = selectedCards;
    const firstWord = firstCard.word;
    const secondWord = secondCard.word;

    const firstWordObj = words.find(word => word.korean === firstWord || word.english === firstWord);
    const secondWordObj = words.find(word => word.korean === secondWord || word.english === secondWord);

    if (
        (firstWordObj.korean === firstWord && firstWordObj.english === secondWord) ||
        (firstWordObj.english === firstWord && firstWordObj.korean === secondWord)
    ) {
        firstCard.element.classList.add('matched');
        secondCard.element.classList.add('matched');
        matchedPairs++;
        if (matchedPairs === words.length) {
            setTimeout(() => alert('Congratulations! You matched all the pairs!'), 300);
        }
    } else {
        setTimeout(() => {
            firstCard.element.classList.remove('flipped');
            secondCard.element.classList.remove('flipped');
            firstCard.element.textContent = '';
            secondCard.element.textContent = '';
        }, 1000);
    }

    selectedCards = [];
}

function resetGame() {
    matchedPairs = 0;
    selectedCards = [];
    createGameBoard();
}

window.onload = resetGame;
