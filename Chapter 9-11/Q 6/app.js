var secretNumber = 4;
var userInput = +prompt("Enter number",2)

if (secretNumber === userInput){
alert("Bingo! you are right")

}
else if (userInput -1 === secretNumber){
    alert("you are near!")
}
else if (userInput !== secretNumber){
    alert("Sorry!Wrong guess!")
}