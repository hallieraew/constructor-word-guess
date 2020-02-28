
function Letter (letterValue) {
    this.letterValue = letterValue;
    this.guessed = false;
    this.letterCheck = function(userInput) {
        if (this.letterValue === userInput) {
            this.guessed = true;
            return true;
    } else {
        return false;
    };
}
    this.letterDisplay = function() {
        if (this.guessed) {
            return this.letterValue;
    
        } else {
            return "_ "
        }
    }
};

// var word = new Letter("k");

// console.log(word.letterDisplay());

// console.log(word.letterCheck("J"));

// console.log(word.letterDisplay());

// console.log(word.letterCheck("k"));

// console.log(word.letterDisplay());

module.exports = Letter;