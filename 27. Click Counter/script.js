const counter = document.getElementById("counter");
const clickbtn = document.getElementById("click-btn");
const resetBtn = document.getElementById("reset-btn");

let count = parseInt(localStorage.getItem("clickCount")) || 0;
counter.textContent = count;

clickbtn.addEventListener("click", function () {
    count++;
    counter.textContent = count;
    localStorage.setItem("clickCount", count);
});

resetBtn.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
    localStorage.setItem("clickCount", count);
});