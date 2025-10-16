const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "" || password === ""){
        message.textContent = "Uzupełnij wszystkie pola!";
        message.style.color = "red";
    } else if (password.length < 6) {
        message.textContent = "Hasło musi mieć co najmniej 6 znaków!";
        message.style.color = "orange";
    } else {
        message.textContent = `Witaj, ${username}!`;
        message.style.color = "green";
    }
});