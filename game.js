var wordList = ["car", "dog", "tiger", "sloth", "chicken"];
var computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
console.log(computerChoice);

var win;
var guessedSoFar = [];
var answerArr = [];
var answerString;

for (i = 0; i < computerChoice.length; i++) {
    answerArr[i] = "-"; 
}

answerString = answerArr.join(" ");
document.getElementById("answer").innerHTML = answerString;


document.onkeyup= function(event) {
    var userGuess = event.key;
    guessedSoFar[guessedSoFar.length] = userGuess
    console.log(userGuess);

    for (i = 0; i < computerChoice.length; i++) {
        if (userGuess === computerChoice[i]) {
            userGuess == answerString;
            console.log(answerString[i]);
            document.getElementById("answer").innerhtml = "-" + answerString;
        }
    }

          
        
}






        





