var qusetion1 = +prompt('Entre your answer.  \n 32 + 46 - 60') //18
var qusetion2 = +prompt('Entre your answer.  \n 3 * 4 - 6 + 45') //51
var qusetion3 = +prompt('Entre your answer.  \n 2 + 6 * 60') //362
var qusetion4 = +prompt('Entre your answer.  \n -45 -23 + 45') //-23
var qusetion5 = +prompt('Entre your answer.  \n 1+3 * 3 -9 * 0 + 9') //19 
var qusetion6 = +prompt('Entre your answer.  \n 5*5/5+45 - 50') //50
var qusetion7 = +prompt('Entre your answer.  \n 2*5+2') //12
var qusetion8 = +prompt('Entre your answer.  \n 36 + 49 - 60') //25
var qusetion9 = +prompt('Entre your answer.  \n 3 + 46 - 60') //-11
var qusetion10 = +prompt('Entre your answer.  \n 32 + 6 - 6') //32

var correct = 0
var totalMarks = 100
var obtainedMarks = 0;
var percentage = 0
//Q1
if (qusetion1 == 18) {
    console.log('Question 1 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else {
    console.log("Question 1 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q2
if (qusetion2 == 51) {
    console.log('Question 2 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else {
    console.log("Question 2 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q3
if (qusetion3 == 362) {
    console.log('Question 3 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else {
    console.log("Question 3 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q4
if(qusetion4 == -23){
    console.log('Question 4 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 4 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q5
if(qusetion5 == 19){
    console.log('Question 5 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 5 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q6
if(qusetion6 == 50){
    console.log('Question 6 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 6 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q7
if(qusetion7 == 12){
    console.log('Question 7 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 7 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q8
if(qusetion8 == 25){
    console.log('Question 8 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 8 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q9
if(qusetion9 == -11){
    console.log('Question 9 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 9 is Wrong!")
    obtainedMarks = obtainedMarks - 10
}
//Q10
if(qusetion10 == 32){
    console.log('Question 10 is Correct')
    ++correct
    obtainedMarks = obtainedMarks + 10
}
else{
    console.log("Question 10is Wrong!")
    obtainedMarks = obtainedMarks - 10
}

percentage = (obtainedMarks / totalMarks) * 100
console.log('Your obtained marks are :', obtainedMarks)

if (correct == 1) {
    console.log('Your correct answers is :', correct)
}
else {
    console.log('Your correct answers are :', correct)
}

if (percentage >= 80) {
    console.log('Your percentage is :', percentage, "%", 'and Grade is A1')
}
else if (percentage >= 70) {
    console.log('Your percentage is :', percentage, "%", 'and Grade is A')
}
else if (percentage >= 60) {
    console.log('Your percentage is :', percentage, "%", 'and Grade is B')
}
else if (percentage >= 50) {
    console.log('Your percentage is :', percentage, "%", 'and Grade is C')
}
else if (percentage >= 40) {
    console.log('Your percentage is :', percentage, "%", 'and Grade is D')
}
else if (percentage < 40) {
    console.log('Your percentage is :', percentage, "%", 'and you are Fail!')
}
