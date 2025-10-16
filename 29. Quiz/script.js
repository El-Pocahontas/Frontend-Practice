const questions = [
    {
        question: "Jakie jest największe jezioro w Polsce?",
        answers: ["Śniardwy", "Mamry", "Hańcza", "Gopło"],
        correct: 0
    },
    {
        question: "Który język działa tylko w przeglądarce?",
        answers: ["Phyton", "C#", "JavaScript", "Php"],
        correct: 2
    },
    {
        question: "Który z tych tagów HTML to nagłówek?",
        answers: ["<div>", "<span>", "<h1>", "<p>"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionE1 = document.getElementById("questions");
const answersE1 = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultE1 = document.getElementById("result");

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
}

function clearAnswers() {
    answersE1.innerHTML = "";
}

function checkAnswer(index) {
    const buttons = answersE1.querySelectorAll("button");
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === questions[currentQuestion].correct) {
            btn.classList.add("correct");
        } else if (i === index) {
            btn.classList.add("incorrect");
        }
    });

    if (index === questions[currentQuestion].correct) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionE1.textContent = "Koniec quizu!";
    clearAnswers();
    nextBtn.style.display = "none";
    resultE1.textContent = `Twój wynik: ${score}/${questions.length}`;
    resultE1.classList.remove("hidden");
}
showQuestion();