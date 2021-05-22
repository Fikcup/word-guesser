var words = ["Apple", "Cucumber", "Banana", "Onion", "Horse"];
var guessesRemaining;
var wordsIndex;
var word;
var letter;
var grabButton = document.querySelectorAll("button");

function chooseWord()
{
    wordsIndex = Math.floor(Math.random() * (words.length - 1));
    word = words[wordsIndex];
}

function incorrectGuesses()
{
    guessesRemaining = Math.floor(words[wordsIndex].length / 2);
    console.log(guessesRemaining);
}

function checkLetter()
{
    // Pull the value of the button and declare it as letter
    letter = document.getElementsByClassName("letter").value;
    console.log(letter);

    // Read the value of the button for If statement    

   /* if (word.contains(letter))
    {
        console.log("Correct guess");
    }
    else
    {
        guessesRemaining--;
    } */
}

chooseWord();
incorrectGuesses();

grabButton.forEach(button => {
    button.addEventListener("click", function() { checkLetter() });
    console.log(button);
});