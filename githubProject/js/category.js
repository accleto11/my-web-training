const words = [
    { word: '김치', category: 'Food' },
    { word: '불고기', category: 'Food' },
    { word: '밥', category: 'Food' },
    { word: '가족', category: 'People' },
    { word: '친구', category: 'People' },
    { word: '아이', category: 'People' }
];

let score = 0;

function createGame() {
    const wordBank = document.getElementById('wordBank');
    wordBank.innerHTML = '';
    words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.draggable = true;
        wordElement.textContent = word.word;
        wordElement.dataset.category = word.category;
        wordElement.addEventListener('dragstart', dragStart);
        wordBank.appendChild(wordElement);
    });
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
    const categoryElement = event.target;

    if (categoryElement.classList.contains('category')) {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.textContent = data;
        categoryElement.appendChild(wordElement);
    }
}

function checkCategories() {
    const feedback = document.getElementById('feedback');
    const foodCategory = Array.from(document.getElementById('foodCategory').getElementsByClassName('word')).map(word => word.textContent);
    const peopleCategory = Array.from(document.getElementById('peopleCategory').getElementsByClassName('word')).map(word => word.textContent);
    
    const correctFood = words.filter(word => word.category === 'Food').map(word => word.word);
    const correctPeople = words.filter(word => word.category === 'People').map(word => word.word);

    const isFoodCorrect = foodCategory.sort().toString() === correctFood.sort().toString();
    const isPeopleCorrect = peopleCategory.sort().toString() === correctPeople.sort().toString();

    if (isFoodCorrect && isPeopleCorrect) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
        score++;
    } else {
        feedback.textContent = 'Incorrect. Try again!';
        feedback.style.color = 'red';
    }
}

function resetGame() {
    document.getElementById('foodCategory').innerHTML = '<h3>Food</h3>';
    document.getElementById('peopleCategory').innerHTML = '<h3>People</h3>';
    createGame();
}

window.onload = createGame;
