require('./Letter.js');

Word = function (inputString) {
    this.wordArray = [];
    this.badGuessString = "";
    this.badGuessCount = 0;
    for (i = 0; i < inputString.length; i++) {
        this.wordArray[i] = new Letter(inputString.slice(i, i + 1));
    }
    this.currentGuessString = function () {
        this.wordGuessString = "";
        for (i = 0; i < inputString.length; i++) {
            this.wordGuessString = this.wordGuessString + this.wordArray[i].isTheLetter() + " ";
        }
        return this.wordGuessString;
    }
    this.checkGuess = function (guess) {
        var inThisWord = false;                     //assume this letter/guess in not in thisWord 
        for (i = 0; i < inputString.length; i++) {
            previousGuess = this.wordArray[i].guess;
            this.wordArray[i].testGuess(guess);
            if (this.wordArray[i].guess != previousGuess) inThisWord = true; // if state changes then guess is inThisWord
        }
        if (!inThisWord) {
            this.badGuessString = this.badGuessString + guess + " ";
            ++this.badGuessCount;
        }
    }
}

module.export = { Word };
