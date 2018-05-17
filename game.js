var wordList = ["cat", "dog", "tiger", "sloth", "chicken"];
var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
console.log(computerChoice);
var guesses = 10;
var win = 0;
var guessedSoFar = [];
var answerArr = [];
var answerString = [];

for (i = 0; i < computerChoice.length; i++) {
    answerArr[i] = "-"; 
}

answerString = answerArr.join(" ");
document.getElementById("answer").innerHTML = answerArr;


document.onkeyup= function(event) {
    var userGuess = event.key;
    guessedSoFar[guessedSoFar.length] = userGuess
    answerString = computerChoice.split("");
    guesses--;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    
    
    for (var i = 0; i < computerChoice.length; i++) {
        if (userGuess === computerChoice[i]) {
            answerArr[i] = userGuess;
            document.getElementById("answer").innerHTML = answerArr[i];
            
        }
    }    
    
    document.getElementById("answer").innerHTML = answerArr.join("");
    console.log(answerString);
    console.log(answerArr);
    
    
    if (answerArr == answerString) {
        win = win + 1;
        alert("you win");
        document.getElementById("wins").innerHTML = "wins: " + win;
    }
    
    if (guesses < 1) {
        alert("you lose");
    }
    
    
    document.getElementById("guessed").innerHTML = "Guessed so far :" + guessedSoFar;         
}

