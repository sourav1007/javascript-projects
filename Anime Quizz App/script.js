const questions = [
    {
        question: "What is Luffy's fathers name ?",
        answers: [
            { text: "Zoro", correct: false },
            { text: "Sanji", correct: false },
            { text: "Zimbe", correct: false },
            { text: "Dragon", correct: true }

        ]},{
        question: "What is eren's fathers name  ?",
        answers: [
            { text: "Girisha", correct: true },
            { text: "Hannes", correct: false },
            { text: "Armin", correct: false },
            { text: "Zeke", correct: false }

        ]},{
        question: "What is luffy's crew name ?",
        answers: [
            { text: "Redhaired", correct: false },
            { text: "Strawhats", correct: true },
            { text: "Blackbeard", correct: false },
            { text: "Whitebeard", correct: false }

        ]},{
        question: "What is Naruto's team name ?",
        answers: [
            { text: "Team3", correct: false },
            { text: "Team8", correct: false },
            { text: " Team7", correct: true },
            { text: "Team4", correct: false }

        ]},{
        question: "Who gave luffy the straw hat ?",
        answers: [
            { text: " Ace", correct: false },
            { text: " Sabo", correct: false },
            { text: "Shanks", correct: true },
            { text: "Dragon", correct: false }

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz() {
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })

}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";

}
function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionindex++;
    if (currentQuestionindex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }



}
nextButton.addEventListener("click", () => {
    if (currentQuestionindex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

