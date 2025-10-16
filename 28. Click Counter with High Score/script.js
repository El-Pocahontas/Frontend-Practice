const counter = document.getElementById("counter");
const record = document.getElementById("record");
const clickBtn = document.getElementById("click-btn");
const resetBtn = document.getElementById("reset-btn");

let count = parseInt(localStorage.getItem("clickCount")) || 0;
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

counter.textContent = count;
record.textContent = highScore;

clickBtn.addEventListener("click", function () {
    count++;
    counter.textContent = count;
    localStorage.setItem("clickCount", count);

    if (count > highScore) {
        highScore = count;
        record.textContent = highScore;
        localStorage.setItem("highScore", highScore);
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
    localStorage.setItem("clickCount", count);
});