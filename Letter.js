//@ts-check

/**
 * @type {module}
 */
//@ts-ignore
Letter = function (letter) {
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

//@ts-ignore
module.export = { Letter };