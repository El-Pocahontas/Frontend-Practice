const guestions = [
    {
        question: "Stolica Polski to?",
        answers: ["Warszawa", "Kraków", "Gdańsk", "Wrocław"],
        correct: 0
    },
    {
        question: "Ile to 2 + 2?",
        answers: ["3", "4", "5", "22"],
        correct: 1
    },
    {
        question: "Który język służy do stylizacji?",
        answers: ["HTML", "JavaScript", "CSS", "Python"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timerInterval;
let timeLeft;

const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answers");
const nextBtn = document.getElementById("next-button");
const resultE1 = document.getElementById("result");
const timerE1 = document.getElementById("timer");

function showQuestion() {
    clearAnswers();
    const q = questions[currentQuestion];
    questionE1.textContent = q.question;

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.addEventListener("click", () => checkAnswer(index));
        answersE1.appendChild(btn);
    });

    nextBtn.classList.add("hidden");
    startTimer();
}