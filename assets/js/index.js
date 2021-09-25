var words = ["APPLE", "CUCUMBER", "BANANA", "ONION", "HORSE", "BANJO", "SUBWAY", "GAZEBO", "OXYGEN", "JAWBREAKER", "CRYPT", "HAZARD", "GOSSIP", "FUNNY", "BUFFALO", "COBWEB", "JACKPOT", "JIGSAW", "PUZZLE", "HANGMAN", "DUPLEX", "CYCLE", "JOCKEY", "JOGGING", "RUNNING", "WALKING", "JUKEBOX", "RECORD", "KAYAK", "CANOE", "QUEUE", "POOL"];
var guessesRemaining;
var wordsIndex;
var word;
var letter;
var grabButton = document.querySelectorAll("button");
var answerArray = [];
var remainingLetters;

function guessesDisplay() {
    var outputGuesses = document.getElementById("guessesRemaining");

    outputGuesses.innerHTML = guessesRemaining;
}

function chooseWord() {
    // Chooses a random integer that coincides with words[index]
    wordsIndex = Math.floor(Math.random() * (words.length - 1));
    word = words[wordsIndex];
    displayWord();
}

function displayWord() {
    remainingLetters = word.length;
    var output = document.getElementById("guessWord");

    // Initializes word displayed as underscores
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    answerArray.join("");
    output.innerHTML = answerArray;
}

function updateDisplayWord() {
    var output = document.getElementById("guessWord");
    answerArray.join("");
    output.innerHTML = answerArray;

    // Win condition met when _ have all been replaced by letters
    if (answerArray.includes('_') !== true) {
        alert("You win! The word was " + words[wordsIndex] + ".");
    }
}

function incorrectGuesses() {
    // Half the word length rounded down equals number of incorrect guesses
    guessesRemaining = Math.floor(words[wordsIndex].length / 2);
    console.log(guessesRemaining);
}

function checkLetter() {
    letter = this.value;    

    // If word contains the clicked letter
   if (word.includes(letter)) {
        // And the win condition hasn't been met
        if (remainingLetters > 0) {
            // Iterate through the word until letter's index is found
            for (var j = 0; j < word.length; j++) {
                // Replace underscore with letter
                if (word[j] == letter) {
                    answerArray[j] = letter;
                }
            }
            updateDisplayWord();
        }
        remainingLetters--;
    } else {
        guessesRemaining--;
        
        // If you have no guesses remaining lose condition has been met
        if (guessesRemaining == 0) {
            alert("You lose. The word was " + words[wordsIndex] + ". Refresh and try again");
        }
    }

    // Changes the color of clicked buttons
    this.style.backgroundColor = 'Black';
    guessesDisplay();
}

// Initializes intro functions
chooseWord();
incorrectGuesses();

// Creates event listener for each button
grabButton.forEach(button => {
    button.addEventListener("click", checkLetter);
});