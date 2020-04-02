//@ts-check


/**
 * @namespace Word
 * @memberof WordGuessCli
 * 
 * @module Word
 * @see WordGuessCli
 */


/** Require the {@link ./Letter.js} object definition
 * @type {module}
 */
//@ts-ignore
require('./Letter.js');

/**
 * @type {module}
 */
//@ts-ignore
Word = function (inputString) {
    this.wordArray = [];
    this.badGuessString = "";
    this.badGuessCount = 0;
    for (var i = 0; i < inputString.length; i++) {
        //@ts-ignore
        this.wordArray[i] = new Letter(inputString.slice(i, i + 1));
    }
    this.currentGuessString = function () {
        this.wordGuessString = "";
        for (var i = 0; i < inputString.length; i++) {
            this.wordGuessString = this.wordGuessString + this.wordArray[i].isTheLetter() + " ";
        }
        return this.wordGuessString;
    }
    this.checkGuess = function (guess) {
        var inThisWord = false;                     //assume this letter/guess in not in thisWord 
        var previousGuess;
        for (var i = 0; i < inputString.length; i++) {
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

/** */
//@ts-ignore
module.export = { Word };
