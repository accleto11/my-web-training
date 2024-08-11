const passage = "오늘은 날씨가 좋고, 친구와 함께 공원에 갔습니다. 우리는 그곳에서 축구를 했고, 맛있는 음식을 먹었습니다. 공원에서 산책도 하고, 사진도 찍었습니다. 저녁에는 집에 돌아와서 가족과 함께 저녁을 먹었습니다. 정말 즐거운 하루였습니다.";

const questions = [
    { 
        question: "오늘 날씨는 어땠나요?", 
        options: ["좋다", "나쁘다", "흐리다"], 
        answer: "좋다", 
        questionEn: "What was the weather like today?" 
    },
    { 
        question: "주인공은 어디에 갔나요?", 
        options: ["학교", "공원", "집"], 
        answer: "공원", 
        questionEn: "Where did the protagonist go?" 
    },
    { 
        question: "주인공은 무엇을 했나요?", 
        options: ["독서", "축구", "수영"], 
        answer: "축구", 
        questionEn: "What did the protagonist do?" 
    },
    { 
        question: "주인공은 누구와 함께 갔나요?", 
        options: ["혼자", "가족", "친구"], 
        answer: "친구", 
        questionEn: "Who did the protagonist go with?" 
    },
    { 
        question: "주인공이 공원에서 무엇을 했나요?", 
        options: ["산책", "축구", "독서"], 
        answer: "축구", 
        questionEn: "What did the protagonist do at the park?" 
    },
    { 
        question: "저녁에는 무엇을 했나요?", 
        options: ["영화 보기", "가족과 저녁 먹기", "쇼핑"], 
        answer: "가족과 저녁 먹기", 
        questionEn: "What did the protagonist do in the evening?" 
    },
    { 
        question: "주인공은 무엇을 먹었나요?", 
        options: ["피자", "한식", "햄버거"], 
        answer: "한식", 
        questionEn: "What did the protagonist eat?" 
    },
    { 
        question: "주인공은 공원에서 무엇을 찍었나요?", 
        options: ["사진", "비디오", "그림"], 
        answer: "사진", 
        questionEn: "What did the protagonist take at the park?" 
    },
    { 
        question: "주인공이 돌아온 장소는 어디인가요?", 
        options: ["공원", "집", "학교"], 
        answer: "집", 
        questionEn: "Where did the protagonist return to?" 
    },
    { 
        question: "주인공의 하루는 어땠나요?", 
        options: ["지루했다", "재미있었다", "피곤했다"], 
        answer: "재미있었다", 
        questionEn: "How was the protagonist's day?" 
    }
];

function createGame() {
    document.getElementById('passageText').textContent = passage;

    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question} (${q.questionEn})</p>
        `;
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        q.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'form-check';
            optionElement.innerHTML = `
                <input class="form-check-input" type="radio" name="question${index}" value="${option}" id="option${index}${option}">
                <label class="form-check-label" for="option${index}${option}">
                    ${option}
                </label>
            `;
            optionsDiv.appendChild(optionElement);
        });
        
        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    const feedback = document.getElementById('feedback');
    feedback.textContent = `You scored ${score} out of ${questions.length}`;
    feedback.style.color = score === questions.length ? 'green' : 'red';
}

function resetGame() {
    createGame();
    document.getElementById('feedback').textContent = '';
}

window.onload = createGame;
