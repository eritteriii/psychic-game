
$(document).ready(function () {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "t", "u", "v", "w", "x", "y", "z"]
    var letterRandom
    var wins = 1
    var losses = 1
    var guess
    var guessRemain = 10
    var wrongLetters
    var randomNumber


    function randomLetter() {
        randomNumber = Math.floor(Math.random() * letters.length)
        //console.log(randomNumber)
        letterRandom = letters[randomNumber]//letters[Math.floor(Math.random() * letters.length)]
        //letterRandom = letters[Math.floor(Math.Random() * letters.length)];
        console.log(letterRandom);
        guessRemain = 10
    }

    randomLetter()

    document.onkeyup = event => {

        var guess = event.key.toLowerCase();
        $('#userGuess').html("Your Guess: " + guess)

        if (guess === letterRandom) {
            alert("Wow, you actually won. Everybody gets lucky, sometimes.");
            $("#wins").html("Wins: " + wins++)
            randomLetter()

        } else {
            alert("This game is impossible, you should just give up.");
            $('#losses').html("Losses: " + losses++)
            console.log(guess)
            $("#guessesLeft").html("Remaining Guesses: " + guessRemain--)
            $('#currentguess').append(" " + guess + ", ")
            GameOver()
        }

        function GameOver() {
            if (guessRemain < 0) {
                var over = document.createElement("img");
                over.src = "https://ak8.picdn.net/shutterstock/videos/26123588/thumb/9.jpg"
                document.body.prepend(over)
                document.getElementById("breh").style.display = "none";
            }
        }

    }
});
