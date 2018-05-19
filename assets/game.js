function reset() {
    shouldContinue = true;
    computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(computerChoice);
    guessedSoFar = [];
    answerArr = [];
    guesses = 10;
    document.getElementById("guesses").innerHTML = "Guesses left: 10";
    document.getElementById("guessed").innerHTML = "Guessed so far :" + guessedSoFar; 
    for (i = 0; i < computerChoice.length; i++) {
        answerArr[i] = " - "; 
    }
    document.getElementById("answer").innerHTML = answerArr.join("");
}

var wordList = ["cat", "dog", "tiger", "sloth", "chicken", "ferret", "deer", "bear", "rabbit", "panda"];
var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
console.log(computerChoice);
var guesses = 10;
var win = 0;
var guessedSoFar = [];
var answerArr = [];
var answerString = [];
var shouldContinue = true;


function start() {
    shouldContinue = true;

    for (i = 0; i < computerChoice.length; i++) {
        answerArr[i] = " - "; 
    }


    document.getElementById("answer").innerHTML = answerArr.join("");


    document.onkeyup= function(event) {
        if (shouldContinue === true) {
            var userGuess = event.key;
            guessedSoFar[guessedSoFar.length] = userGuess
            answerString = computerChoice;
            guesses--;
            document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
            
            
            for (var i = 0; i < computerChoice.length; i++) {
                if (userGuess === computerChoice[i]) {
                    answerArr[i] = userGuess;
                    document.getElementById("answer").innerHTML = answerArr[i];
                    console.log(answerString);
                    console.log(answerArr.join(""));    
                }

                
            }    
            
            document.getElementById("answer").innerHTML = answerArr.join("");
            
            if (answerString == answerArr.join("")) {
                win = win + 1;
                shouldContinue = false;
                swal("You Win", "The Word Was " + computerChoice, "success", {
                    button: " High Five!!!! ",
                  });
                document.getElementById("wins").innerHTML = "wins: " + win;
                
                
            }
            
            if (guesses < 0) {
                swal("Good job!", "The Word Was " + computerChoice, "Warning", {
                    button: " Try Again :( ",
                  });
                shouldContinue = false;
            }
            
            
            document.getElementById("guessed").innerHTML = "Guessed so far :" + guessedSoFar;         
        }
    }
}