const form = document.getElementById("pizzaForm");
const sizeField = document.getElementById("size");
const quantityField = document.getElementById("quantity");
const resultDiv = document.getElementById("result");

function calculatePrice(sizeCm, quantity) {

    let basePrice;
    if (sizeCm == 30) {
        basePrice = 20;
    }
    else if (sizeCm == 40) {
        basePrice = 30;
    }
    else if (sizeCm == 50) {
        basePrice = 40;
    }
    else {
        return null;
    }
    return basePrice * quantity;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    resultDiv.textContent = "";
resultDiv.classList.remove("error");

const sizeValue = Number(sizeField.value);
const quantityValue = Number(quantity.value);

if (!sizeValue) {
    resultDiv.textContent = "Musisz wybrać rozmiar pizzy."
    resultDiv.classList.add("error");
    return;
}
if (!quantityValue || quantityValue < 1) {
    resultDiv.textContent = "Podaj poprawną ilość (min. 1).";
    resultDiv.classList.add("error");
    return;
}

const total = calculatePrice(sizeValue, quantityValue);
if (total === null) {
    resultDiv.textContent = "Nieobsługiwany rozmiar.";
    resultDiv.classList.add("error");
    return;
}

resultDiv.textContent = `Twoje zamówienie: ${quantityValue} x pizza ${sizeValue} cm = ${total} zł.`;
});