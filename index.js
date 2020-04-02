//@ts-check
/**
 * @todo Anywhere //@ts-ignore appears in code is an unresolve typescripting reference, need to learn these formats
 */

/**
 * @namespace WordGuessCli
 */

/** Require the {@link ./Word.js} object definition
 * @type {module}
 */
require("./Word.js");


/** Require the {@link https://www.npmjs.com/package/inquirer} package
 * @type {module}
 */
var inquirer = require("inquirer");



/** Counts number of bad guesses allowed
 * @type {number}
 */
const numberOfBadGuessesAllowed = 11;


/** if {@link currentGuessString} = {@link thisWord} set to true to end the game
 * @type {boolean}
 */
var wordFound = false;


//https://www.hangmanwords.com/words list of best 250 hard words for hangman from this site
/**
 * @type {Array<string>}
 */
const hangmanArray = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes",
    "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful",
    "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness",
    "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle",
    "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness",
    "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour",
    "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic",
    "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly",
    "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak",
    "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky",
    "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays",
    "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia",
    "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum",
    "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk",
    "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless",
    "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy",
    "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy",
    "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern",
    "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper",
    "zodiac", "zombie"];


/** Random number set to 0 to hangmanArrary.length to select the word to be used
 * @type {number}
 */
var randomWord = Number(Math.floor(Math.random() * hangmanArray.length));  // to chose word from array of 200


/** Word chosen randomly using {@link randomWord}
 * @type {string}
 */
var thisWord = hangmanArray[randomWord];


/** Global store the new Word object
 * @type {object}
 */
//@ts-ignore
var x = new Word(thisWord);


//  index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//  Randomly selects a word and uses the `Word` constructor to store it
//  Prompts the user for each guess and keeps track of the user's remaining guesses

/** Called from {@link game} to get user input, calls itself due to async 
 * @function getCharInput
 */
const getCharInput = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess the next letter? ",
                name: "letter"
            }
        ])
        .then(function (inquirerResponse) {
            x.checkGuess(inquirerResponse.letter);
            console.log(`The word is: ${x.currentGuessString()}`);
            console.log(`badGuesses: ${x.badGuessString} Bad Guesses Used: ${x.badGuessCount} of ${numberOfBadGuessesAllowed}\n`);
            // console.log(`condition true?: ${x.currentGuessString().replace(/ /g, "") === thisWord}`);
            if (x.currentGuessString().replace(/ /g, "") === thisWord) wordFound = true;
            if (x.badGuessCount < numberOfBadGuessesAllowed && !wordFound) getCharInput();
            else if (wordFound) console.log(`congratulations it was ${thisWord}`);
            else if (x.badGuessCount >= 11) console.log(`you blew it the word was ${thisWord}`);
        }
        ).catch(function (err) {
            console.log(err);
        }
        );
}



/** Main entry point to the game
 * @function game
 */
const game = () => {

    console.log(`The word is: ${x.currentGuessString()}`);
    getCharInput();
}

game();


