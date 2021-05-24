var words = ["APPLE", "CUCUMBER", "BANANA", "ONION", "HORSE"];
var guessesRemaining;
var wordsIndex;
var word;
var letter;
var grabButton = document.querySelectorAll("button");

function displayWord()
{
    var output = document.getElementById("guessWord");

    output.innerHTML = word;

    // Hide characters not guessed and display as underscores
}

function chooseWord()
{
    wordsIndex = Math.floor(Math.random() * (words.length - 1));
    word = words[wordsIndex];

    console.log(word);
    displayWord();
}

function incorrectGuesses()
{
    guessesRemaining = Math.floor(words[wordsIndex].length / 2);
    console.log(guessesRemaining);
}

function checkLetter()
{
    letter = this.value;
    console.log(letter);    

   if (word.includes(letter))
    {
        // Have letter appear and remove the underscore
        // Discolor the button to show that it has been clicked
        console.log("Correct guess");
    }
    else
    {
        // Discolor the button to show that it has been clicked
        guessesRemaining--;
        console.log("You have " + guessesRemaining + " guesses remaining.")
    }
}

chooseWord();
incorrectGuesses();

grabButton.forEach(button => {
    button.addEventListener("click", checkLetter);
});