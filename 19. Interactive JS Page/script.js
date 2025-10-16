const przycisk = document.getElementById("przycisk");
const tekst = document.getElementById("tekst");

przycisk.addEventListener("click", function () {
    tekst.textContent = "Brawo! JavaScript działa!"
    tekst.style.color = "green";
});