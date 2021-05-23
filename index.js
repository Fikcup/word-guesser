var words = ["APPLE", "CUCUMBER", "BANANA", "ONION", "HORSE"];
var guessesRemaining;
var wordsIndex;
var word;
var grabButton = document.querySelectorAll("button");

function chooseWord()
{
    wordsIndex = Math.floor(Math.random() * (words.length - 1));
    word = words[wordsIndex];

    console.log(word);
}

function incorrectGuesses()
{
    guessesRemaining = Math.floor(words[wordsIndex].length / 2);
    console.log(guessesRemaining);
}

function checkLetter()
{
    const letter = this.value;
    console.log(letter);    

   if (word.includes(letter))
    {
        console.log("Correct guess");
    }
    else
    {
        guessesRemaining--;
        console.log("You have " + guessesRemaining + " guesses remaining.")
    }
}

chooseWord();
incorrectGuesses();

grabButton.forEach(button => {
    button.addEventListener("click", checkLetter);
});