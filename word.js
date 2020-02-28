var Letter = require("./letter");

function Word(word) {
    this.letters = word.toUpperCase().split("").map(function (char) {
        return new Letter(char)
    });
    this.wordDisplay = function () {
        var display = "";
        this.letters.forEach(function (char) {
            display += char.letterDisplay()
        });
        return display;
    };
    this.wordCheck = function (userInput) {
        var correctGuess =
            false;
        this.letters.forEach(function (char) {
            if (char.letterCheck(userInput.toUpperCase())) {
                correctGuess = true;
            }
        });
        return correctGuess;
    };
    this.wordComplete = function () {
        var complete = true;
        this.letters.forEach(function(char){
            if (!char.guessed){
                complete = false;
                return;
            }
        });
        return complete;
    }

}

var newWord = new Word("no");

console.log(newWord.wordDisplay());

console.log(newWord.wordCheck("n"));
console.log(newWord.wordComplete());
console.log(newWord.wordDisplay());

console.log(newWord.wordCheck("o"));

console.log(newWord.wordDisplay());

console.log(newWord.wordComplete());