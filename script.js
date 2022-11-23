function check() {
var i=0;
var q1=document.quiz.question1.value;
var q2=document.quiz.question2.value;
var q3=document.quiz.question3.value;
var q4=document.quiz.question4.value;
var q5=document.quiz.question5.value;
var q6=document.quiz.question6.value;
var q7=document.quiz.question7.value;
var q8=document.quiz.question8.value;
var q9=document.quiz.question9.value;
var q10=document.quiz.question10.value;
if (q1=="15") {i++}
if (q2=="Tom Brady") {i++}
if (q3=="Mike Tyson") {i++}
if (q4=="Steph Curry") {i++}
if (q5=="Cy Young") {i++}
if (q6=="8") {i++}
if (q7=="Colin Kaepernick") {i++}
if (q8=="Gabby Douglas") {i++}
if (q9=="2001 Mariners") {i++}
if (q10=="Dan Marino") {i++}
	if (i===10) {
	alert(`You recieved ${i} out of 10 points! Perfection! 😎`)
} else if (i<10 && i>6) {
	alert(`You recieved ${i} out of 10 points! Great Job! 😁`) 
} else if (i<7 && i>4) {
	alert(`You recieved ${i} out of 10 points! Not too bad. 😌`) 
} else if (i<4) {
	alert(`You recieved ${i} out of 10 points! Uh Oh... 🫢`) 

}
};

