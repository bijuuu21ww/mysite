const words = [
    { foreign: "apple", translation: "яблоко" },
    { foreign: "book", translation: "книга" },
    { foreign: "car", translation: "машина" },
    { foreign: "house", translation: "дом" },
    { foreign: "tree", translation: "дерево" },
];

let currentWordIndex = 0;

function displayWord() {
    const wordElement = document.getElementById("word");
    wordElement.textContent = words[currentWordIndex].foreign;
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

document.getElementById("submit").addEventListener("click", function () {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const correctAnswer = words[currentWordIndex].translation.toLowerCase();
    const resultElement = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Правильно!";
    } else {
        resultElement.textContent = Неправильно. Правильный ответ: ${correctAnswer};
    }
});

document.getElementById("next").addEventListener("click", function () {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayWord();
});

window.onload = displayWord;