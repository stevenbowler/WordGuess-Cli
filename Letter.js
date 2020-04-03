//@ts-check

/**
 * @namespace Letter
 * @memberof Word
 * 
 * @module Letter
 * @see module:Word
 */

/**
 * @function Letter
 * @param {string} letter
 */
function Letter(letter) {
    this.letter = letter;
    this.guess = false;
    this.isTheLetter = () => {
        if (this.guess) return this.letter;
        else return "_";
    }
    this.testGuess = (guess) => {
        if (guess === this.letter) this.guess = true;
    }
}

module.exports = Letter;