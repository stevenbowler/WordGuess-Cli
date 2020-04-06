//@ts-check


/**
 * @namespace Word
 * @memberof WordGuessCli
 * 
 * @module Word
 * @see module:WordGuessCli
 */


/** Require the {@link ./Letter.js} constructor
 * @type {module}
 */
var Letter = require('./Letter.js');

/** Constructor for the randomly selected word
 * @class
 * @param {string} inputString this is the full string based on {@link randomWord}
 */
function Word(inputString) {
    /**
     * @lends Word.prototype
     */
    this.wordArray = [];
    this.badGuessString = "";
    this.badGuessCount = 0;
    for (var i = 0; i < inputString.length; i++) {
        this.wordArray[i] = new Letter(inputString.slice(i, i + 1));
    }
    /**
     * Return wordGuessString with 
     * @function currentGuessString
     * @returns {string}
     */
    this.currentGuessString = function () {
        var wordGuessString = "";
        for (var i = 0; i < inputString.length; i++) {
            wordGuessString = wordGuessString + this.wordArray[i].isTheLetter() + " ";
        }
        return wordGuessString;
    }
    /**
     * Runs method {@link Letter.testGuess} set boolean true if letter matches string, else increment badGuessCount
     * @function checkGuess
     * @param {string} guess This is the guess letter from each iteration of the program
     */
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

module.exports = Word;
