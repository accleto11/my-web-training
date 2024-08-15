let phrase = ["배고파요", "실례합니다", "배불러요", "뭐먹을래요", "도와주세요", "안녕하세요", "좋은오후입니다", "만나서 반갑습니다", "잘지내세요?", "잘치내요"];
let meaning = ["I'm hungry", "Excuse me", "I'm full", "What do you want to eat", "please help me", "Hello", "Good Afternoon", "Nice to meet you", "How are you", "I'm fine"];

const phraseBox = document.getElementById("phrase");
const meaningBox = document.getElementById("meaning");
const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkPhrase");
const resetPhrase = document.getElementById("resetPhrase");
const answerBox = document.getElementById("answerBox");
let qIndex = document.getElementById("qIndex");
let score = document.getElementById("score");
let index = 0;
let correctAnswers = 0;

function vocabsBuilder() {
    phraseBox.value = phrase[index];
    index++;
    correctMeaning = false;
    meaningBox.value = "";
    startBtn.disabled = true;
    qIndex.textContent = index;
    checkBtn.disabled = false;
}

function checkMeaning() {
    // check if the input meaning matches the english translation
    if (meaningBox.value.trim().toLowerCase() === meaning[index-1].toLowerCase()) {
        answerBox.textContent = `Correct! ${meaning[index-1]}`;
        correctAnswers++;
        startBtn.disabled = false;
        score.textContent = correctAnswers;
        meaningBox.value = "";
        checkBtn.disabled = true;
    } else {
        answerBox.textContent = `Try Again! ${meaning[index-1]}`;
        startBtn.disabled = true;
    }
}

function resetPhrases() {
    // reset scores and index

    index = 0;
    correctAnswers = 0;

    // reset the input/display values

    qIndex.textContent = "";
    score.textContent = "";
    meaningBox.value = "";
    answerBox.textContent = "";
    phraseBox.value = "";

    // Re-enable the start button
    startBtn.disabled = false;
}

startBtn.addEventListener('click', vocabsBuilder);
checkBtn.addEventListener('click', checkMeaning);
resetPhrase.addEventListener('click', resetPhrases);

// footer
const footerCredits = document.getElementById("footerCredits");
const currentYear = new Date().getFullYear();
footerCredits.textContent += `${currentYear}`;