// quiz questions

const quizItems = [
    {
        question: "안녕하세요",
        options: ['Goodbye', 'Hello', 'Thank you', 'Sorry'],
        answer: 'Hello'
    },
    {
        question: "감사합니다",
        options: ['Please', 'Thank you', 'Excuse me', 'Goodnight'],
        answer: 'Thank you'
    },
    {
        question: "사랑해요",
        options: ['I like you', 'Good luck', 'I love you', 'See you later'],
        answer: 'I love you'
    },
    {
        question: "미안합니다",
        options: ['Good morning', 'I am sorry', 'Congratulations', 'How are you?'],
        answer: 'I am sorry'
    },
    {
        question: "잘 지냈어요?",
        options: ['How are you?', 'Good job', 'See you tomorrow', 'Nice to meet you'],
        answer: 'How are you?'
    },
    {
        question: "여기요",
        options: ['Where?', 'Here', 'Over there', 'Please wait'],
        answer: 'Here'
    },
    {
        question: "좋아요",
        options: ['Bad', 'Good', 'Maybe', 'No'],
        answer: 'Good'
    },
    {
        question: "괜찮아요",
        options: ['It\'s okay', 'Yes', 'No', 'Please'],
        answer: 'It\'s okay'
    },
    {
        question: "알겠습니다",
        options: ['I don\'t know', 'Understood', 'Sorry', 'Please repeat'],
        answer: 'Understood'
    },
    {
        question: "행운을 빌어요",
        options: ['Good luck', 'Good night', 'Congratulations', 'Welcome'],
        answer: 'Good luck'
    },
    {
        question: "오랜만이에요",
        options: ['Long time no see', 'See you soon', 'Nice to meet you', 'Goodbye'],
        answer: 'Long time no see'
    },
    {
        question: "저기요",
        options: ['Excuse me', 'Sorry', 'Please', 'Here'],
        answer: 'Excuse me'
    },
    {
        question: "어떻게 지내세요?",
        options: ['How are you?', 'Where are you?', 'What time is it?', 'Are you okay?'],
        answer: 'How are you?'
    },
    {
        question: "잘 자요",
        options: ['Good night', 'Good morning', 'Hello', 'See you later'],
        answer: 'Good night'
    },
    {
        question: "축하합니다",
        options: ['Congratulations', 'Thank you', 'Sorry', 'Good luck'],
        answer: 'Congratulations'
    }
];


function generateQuiz() {
    const quizDiv = document.getElementById("quiz");

    //Add instruction at the top
    const instruction = document.createElement('h1');
    instruction.innerText = 'Choose the correct meaning of the word:';
    
    //append/add instruction to quizDiv
    quizDiv.appendChild(instruction);

    quizItems.forEach((item, qIndex) => {
        // create div to display questions
        const questionDiv = document.createElement('div');

        // create h2 to display questions and number
        const questionText = document.createElement('h2');

        // put the number and question inside the h2
        questionText.innerText = `${qIndex + 1}. ${item.question}`;

        //add questionText inside the question Div
        questionDiv.appendChild(questionText);


        // options/choices
        item.options.forEach((option, oIndex) => {
            //create <label></label>
            const label = document.createElement('label');

            //create input radio button
            const input = document.createElement('input');

            input.type = 'radio';
            input.name = `question${qIndex}`;
            input.value = oIndex;

            //append the input into the label
            label.appendChild(input);

            //put/add createTextNode (option/choices) to label
            label.appendChild(document.createTextNode(option));

            //add/put created label in questionDiv
            questionDiv.appendChild(label);

            // add br for spacing?
            questionDiv.appendChild(document.createElement('br'));
        });

        // add/append questionDiv inside quizDiv;
        quizDiv.appendChild(questionDiv);
    });
}

// function for submitting answer

function submitAnswers() {
    let score = 0;

    quizItems.forEach((item, qIndex) => {

        // get user's answer or choice. Check for the "checked" radio button
        const userAnswer = document.querySelector(`input[name="question${qIndex}"]:checked`);

        //condition to check if userAnswer.value is correct

        if (userAnswer && item.options[userAnswer.value] === item.answer) {
            score++;
        }
    });
    
        //Display the score
        const scoreDiv = document.getElementById("quizScore");

        //
        scoreDiv.innerHTML = `Your score is ${score} out of ${quizItems.length}.`;
}

function resetQuiz() {

    //uncheck all radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');

    //loop through the radio buttons to remove checked
    radios.forEach(radio => {
        radio.checked = false;
    });

    //clear the score display
    const scoreDiv = document.getElementById("quizScore");
    scoreDiv.innerHTML = "";

    //clear previous content using DOM manipulation
    scoreDiv.innerHTML = '';
}


// generate the quiz when the page loads
generateQuiz();