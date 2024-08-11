const quizQuestions = [
    { question: 'What does "안녕하세요" mean?', correctAnswer: 'Hello', options: ['Thank you', 'Goodbye', 'Hello', 'Sorry'] },
    { question: 'What does "감사합니다" mean?', correctAnswer: 'Thank you', options: ['Thank you', 'Yes', 'Good night', 'Hello'] },
    { question: 'What does "학교" mean?', correctAnswer: 'School', options: ['Coffee', 'School', 'Computer', 'Friend'] },
    { question: 'What does "커피" mean?', correctAnswer: 'Coffee', options: ['Coffee', 'Family', 'School', 'See'] },
    { question: 'What does "친구" mean?', correctAnswer: 'Friend', options: ['Drink', 'Friend', 'Computer', 'Speak'] }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answerOptions = document.getElementById('answerOptions');
    answerOptions.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary m-1';
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answerOptions.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const feedback = document.getElementById('feedback');
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        feedback.style.color = 'red';
    }
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    showQuestion();
    document.getElementById('feedback').textContent = '';
}

window.onload = showQuestion;
