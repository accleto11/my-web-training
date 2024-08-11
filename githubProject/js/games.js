const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const input = document.getElementById('meaningInput');
        const resultDiv = document.getElementById('result');
        const timerDiv = document.getElementById('timer');
        const scoreDiv = document.getElementById('score');
        let timer;
        let timeLeft = 30; // Time in seconds
        let currentQuestionIndex = 0;
        let score = 0;

        const questions = [
            { word: '안녕하세요', meaning: 'Hello' },
            { word: '감사합니다', meaning: 'Thank you' },
            { word: '사랑해요', meaning: 'I love you' },
            { word: '죄송합니다', meaning: 'I am sorry' },
            { word: '안녕히 가세요', meaning: 'Goodbye' },
            { word: '네', meaning: 'Yes' },
            { word: '아니요', meaning: 'No' },
            { word: '제 이름은', meaning: 'My name is' },
            { word: '오늘', meaning: 'Today' },
            { word: '내일', meaning: 'Tomorrow' },
            { word: '어제', meaning: 'Yesterday' },
            { word: '물', meaning: 'Water' },
            { word: '밥', meaning: 'Rice' },
            { word: '친구', meaning: 'Friend' },
            { word: '가족', meaning: 'Family' },
            { word: '학교', meaning: 'School' },
            { word: '책', meaning: 'Book' },
            { word: '차', meaning: 'Car' },
            { word: '집', meaning: 'House' },
            { word: '강아지', meaning: 'Puppy' }
        ];

        function drawWord(word) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(word, canvas.width / 2, canvas.height / 2);
        }

        function startTimer() {
            clearInterval(timer);
            timeLeft = 30; // Reset time
            timerDiv.textContent = `Time Left: ${timeLeft}s`;
            timer = setInterval(() => {
                timeLeft--;
                timerDiv.textContent = `Time Left: ${timeLeft}s`;
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    resultDiv.textContent = 'Time is up! Please submit your answer.';
                }
            }, 1000);
        }

        function resetTimer() {
            clearInterval(timer);
            timeLeft = 30; // Reset time
            timerDiv.textContent = `Time Left: ${timeLeft}s`;
        }

        function checkAnswer() {
            clearInterval(timer);
            const meaning = input.value.trim().toLowerCase();
            const correctMeaning = questions[currentQuestionIndex].meaning.toLowerCase();

            if (meaning === correctMeaning) {
                resultDiv.textContent = 'Correct!';
                resultDiv.style.color = 'green';
                score++;
                scoreDiv.textContent = `Score: ${score}`;
            } else {
                resultDiv.textContent = 'Incorrect. Try again!';
                resultDiv.style.color = 'red';
            }
            nextQuestion();
        }

        function nextQuestion() {
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            drawWord(questions[currentQuestionIndex].word);
            input.value = '';
        }

        function resetGame() {
            clearInterval(timer);
            timeLeft = 30;
            timerDiv.textContent = `Time Left: ${timeLeft}s`;
            score = 0;
            scoreDiv.textContent = `Score: ${score}`;
            currentQuestionIndex = 0;
            drawWord(questions[currentQuestionIndex].word);
            input.value = '';
        }

        // Initialize the game
        drawWord(questions[currentQuestionIndex].word);