var words = ["APPLE", "CUCUMBER", "BANANA", "ONION", "HORSE"];
var guessesRemaining;
var wordsIndex;
var word;
var letter;
var grabButton = document.querySelectorAll("button");

function displayWord()
{
    var output = document.getElementById("guessWord");

    for (let i = 0; i < word.length; i++)
    {
        output.innerHTML += "_ ";
    }

    // Display guessed characters instead of underscores
}

function guessesDisplay()
{
    var outputGuesses = document.getElementById("guessesRemaining");

    outputGuesses.innerHTML = guessesRemaining;
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
        console.log("Correct guess");
    }
    else
    {
        guessesRemaining--;
        if (guessesRemaining == 0) 
        {
            alert("You lose. Refresh and try again");
        }
        else
        {
            console.log("You have " + guessesRemaining + " guesses remaining.");
        }
    }

    this.style.backgroundColor = 'Black';
    guessesDisplay();
}

chooseWord();
incorrectGuesses();

grabButton.forEach(button => {
    button.addEventListener("click", checkLetter);
});