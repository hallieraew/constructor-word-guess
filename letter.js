
function Letter (letterValue) {
    this.letterValue = letterValue;
    this.guessed = false;
    this.letterCheck = function() {
        userInput = process.argv[2];
        if (letterValue === userInput) {
            this.guessed = true;
        } else {
            this.guessed = false;
    };
}
    this.letterDisplay = function() {
        if (letterValue === userInput) {
            return " ";
        } else {
            return "_";
        }
    }
};

var word = new Letter("k");

word.letterCheck();



// module.exports(Letter);