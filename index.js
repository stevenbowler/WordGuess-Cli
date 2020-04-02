require("./Word.js");
var inquirer = require("inquirer");

var x;
var numberOfGuesses = 0;
var wordFound = false;
var randomWord;
var thisWord;

//https://www.hangmanwords.com/words list of best 250 words for hangman from this site
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

//  index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//  Randomly selects a word and uses the `Word` constructor to store it
//  Prompts the user for each guess and keeps track of the user's remaining guesses

const getCharInput = () => {
    inquirer
        .prompt([
            // Here we create a basic text prompt.
            {
                type: "input",
                message: "Guess the next letter? ",
                name: "letter"
            }
        ])
        .then(function (inquirerResponse) {
            // console.log("\ninquirerResponse.letter " + inquirerResponse.letter);
            x.checkGuess(inquirerResponse.letter);
            console.log(`The word is: ${x.currentGuessString()}`);
            console.log(`badGuesses: ${x.badGuessString} Bad Guesses Used: ${x.badGuessCount} of 11`);
            // console.log(`condition true?: ${x.currentGuessString().replace(/ /g, "") === thisWord}`);
            if (x.currentGuessString().replace(/ /g, "") === thisWord) wordFound = true;
            ++numberOfGuesses;
            if (x.badGuessCount < 11 && !wordFound) getCharInput();
            else if (wordFound) console.log(`congratulations it was ${thisWord}`);
            else if (x.badGuessCount >= 11) console.log(`you blew it the word was ${thisWord}`);

        }
        ).catch(function (err) {
            console.log(err);
        }
        );
}


const game = () => {

    randomWord = Number(Math.floor(Math.random() * hangmanArray.length));  // to chose word from array of 200
    thisWord = hangmanArray[randomWord];
    // console.log(thisWord);
    x = new Word(thisWord);
    console.log(`The word is: ${x.currentGuessString()}`);
    wordFound = false;
    numberOfGuesses = 0;
    getCharInput();
}

game();


