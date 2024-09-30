var userTime = +prompt("Enter current time in 24 hours format!")
if (userTime >= 000 && userTime < 1200){

    alert("Good Morning!")
}
else if (userTime >= 1200 && userTime < 1700){
    alert("Good Afternoon!")
}
else if(userTime >= 1700 && userTime < 2100){
    alert("Good Evening!")
}
else if(userTime >= 2100 && userTime <= 2359){
    alert("Good Night")
}