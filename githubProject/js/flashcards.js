const flashcards = [
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

let currentIndex = 0;

function showCard() {
    const card = flashcards[currentIndex];
    document.getElementById('frontText').textContent = card.korean;
    document.getElementById('backText').textContent = card.english;
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flip');
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard();
    document.getElementById('flashcard').classList.remove('flip');
}

document.getElementById('flashcard').addEventListener('click', flipCard);

window.onload = showCard;
