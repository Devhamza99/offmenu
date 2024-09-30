var markEnglish = +prompt("Enter your marks in English!");
var markMaths = +prompt("Enter your marks in Maths!");
var markUrdu = +prompt("Enter your marks in Urdu!");

document.write("Total marks : 300 <br>");

var obtainedMarks = markEnglish + markMaths + markUrdu;
document.write(`Your obtained marks : ${obtainedMarks}<br>`);  

var percentage = (obtainedMarks / 300) * 100;
document.write(`Your percentage : ${percentage.toFixed(2)}%<br>`); 

if (percentage >= 80) {
    document.write("Grade: Your grade is A+ <br>");
    document.write("Remarks: Excellent!<br>");
} 
else if (percentage >= 70) {
    document.write("Grade: Your grade is B<br>");
    document.write("Remarks: Good!<br>");
} 
else if (percentage >= 60) {
    document.write("Grade: Your grade is C<br>");
    document.write("Remarks: You need to improve!<br>");
} 
else if (percentage < 60) {
    document.write("Grade: Fail<br>");
    document.write("Remarks: Sorry<br>");
}
