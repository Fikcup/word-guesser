var words = ["APPLE", "CUCUMBER", "BANANA", "ONION", "HORSE"];
var guessesRemaining;
var wordsIndex;
var word;
var letter;
var grabButton = document.querySelectorAll("button");
var answerArray = [];
var remainingLetters;

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

function displayWord()
{
    remainingLetters = word.length;
    var output = document.getElementById("guessWord");

    for (let i = 0; i < word.length; i++)
    {
        answerArray[i] = "_";
    }

    answerArray.join("");
    output.innerHTML = answerArray;
}

function updateDisplayWord()
{
    var output = document.getElementById("guessWord");
    answerArray.join("");
    output.innerHTML = answerArray;

    if (answerArray.includes('_') == false)
    {
        alert("You win!");
    }
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
        if (remainingLetters > 0)
        {
            for (var j = 0; j < word.length; j++)
            {
                if (word[j] == letter)
                {
                    answerArray[j] = letter;
                    console.log(answerArray[j]);
                }
            }

            updateDisplayWord();
            console.log(answerArray);
        }

        remainingLetters--;
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