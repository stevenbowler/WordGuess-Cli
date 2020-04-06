//@ts-check

/**
 * @namespace Letter
 * @memberof Word
 * 
 * @module Letter
 * @see module:Word
 */

/**
 * 
 * @typedef 
 */

/**
 * @constructor
 * @param {string} letter
 */
function Letter(letter) {
    /**
     * @lends Letter.prototype
     */
    this.letter = letter;
    this.guess = false;
    /**
     * Checks if this.guess = true return this.letter  else return "_"
     * @function isTheLetter
     * @returns {string}
     */
    this.isTheLetter = () => {
        if (this.guess) return this.letter;
        else return "_";
    }
    /**
     * If guess = this.letter set this.guess = true
     * @example
     * if (guess === this.letter) 
     *   set boolean this.guess to true for this.letter
     * 
     * @function testGuess
     * @param {string} guess
     *
     */
    this.testGuess = (guess) => {
        if (guess === this.letter) this.guess = true;
    }
}

module.exports = Letter;