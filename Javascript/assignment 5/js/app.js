//Q1
// var name = prompt('Enter your name')
// alert('He ,'+ name)

// //Q2
// var num = +prompt('Enter a number to print its table');
// for(var i=0; i<=10; i++){
//     console.log(num , 'x' , i , '=' , (num*i))
// }

//Q3
// var cityName = prompt('Enter your city name').toLowerCase()
// if(cityName == 'karachi'){
//     alert('Welcome to city of lights')
// }
// else{
//     alert('Welcome to the ' + cityName)
// }

//Q4
// var gender = prompt('Enter your gender')
// if(gender.toLowerCase() == 'male'){
//     alert('Good Morning Sir')
// }
// else if(gender.toLowerCase() == 'female'){
//     alert("Good Morning Ma'am")
// }

//Q5
// var color = prompt('Color of road traffic signal')
// if(color.toLowerCase() == 'red'){
//     alert('Vehicels must stop')
// }
// else if(color.toLowerCase() == 'yellow'){
//     alert('Vehicels should ready to move')
// }
// else if(color.toLowerCase() == 'green'){
//     alert('Vehicels can move now')
// }

//Q6
// var maxAge = 40;
// var userAge = +prompt('Enter your age')
// if(userAge <= maxAge){
//     alert('You are welcome!')
// }
// else{
//     alert('Not Allowed!')
// }

//Q7
// var fuel = +prompt('Remaining fuel in car')
// if(fuel < 0.2){
//     alert('Please refill the fuel in your car')
// }

//Q8
//a
// var a = 4;
// if(++a == 4){
//     alert('Given condition of variable is true')
// }

//b
// var b = 82;
// if(b++ == 82){
//     alert('Given condition of variable is true')
// }

//c
// var c = 12;
// if(c++ == 13){
//     alert('Condition 1 is true!')
// }
// if(c == 13){
//     alert('Condition 2 is true!')
// }
// if(++c < 13){
//     alert('Condition 3 is true!')
// }
// if(c == 14){
//     alert('Condition 4 is true!')
// }

//d
// var materialCoast = 20000;
// var laborCost = 2000;
// var totalCost = laborCost + materialCoast
// if(totalCost === laborCost + materialCoast){
//     alert("Cost are equal!")
// }

//Q9
// var obtainedMark1 = +prompt("Enter first subject marks")
// var obtainedMark2 = +prompt("Enter second subject marks")
// var obtainedMark3 = +prompt("Enter third subject marks")
// var totalObtained = obtainedMark1 + obtainedMark2 + obtainedMark3;
// var totalMarks = 300;
// var percentage = totalObtained/totalMarks * 100 ;
// // // console.log(result)
// if(percentage >= 80){
//     alert('MarkSheet \n Total Marks : ' + totalMarks + '\n Marks Obtained : ' + totalObtained + '\n Percentage : ' + percentage + '\n Grade : A1  \n Remarks : Excellent' )
// }
// else if(percentage >= 70){
//     alert('MarkSheet \n Total Marks : ' + totalMarks + '\n Marks Obtained : ' + totalObtained + '\n Percentage : ' + percentage + '\n Grade A \n Remarks : Good' )
// }
// else if(percentage >= 60){
//     alert('MarkSheet \n Total Marks : ' + totalMarks + '\n Marks Obtained : ' + totalObtained + '\n Percentage : ' + percentage + '\n Grade B \n Remarks : You need too improve' )
// }
// else if(percentage < 60){
//     alert('MarkSheet \n Total Marks : ' + totalMarks + '\n Marks Obtained : ' + totalObtained + '\n Percentage : ' + percentage + '\n Grade Fail \n Remarks : Sorry' )
// }

//Q10
// var item1 = prompt("Name of first item")
// var item2 = prompt("Name of second item")
// var priceOfItem1 = +prompt("Price of first item")
// var priceOfItem2 = +prompt("Price of second item")
// var quantityOfItem1 = prompt("Quantity Of Item 1")
// var quantityOfItem2 = prompt("Quantity Of Item 2")
// var totalPrice = priceOfItem1 * quantityOfItem1 + priceOfItem2 * quantityOfItem2

// if (totalPrice > 2000) {
//     alert('Shoping Chart \n Price of '+ item1 + ' is ' + priceOfItem1 + '\n Quantity of : ' + item1 + ' is ' + quantityOfItem1 + '\n Price of ' + item2 + ' is ' + priceOfItem2 + '\n Quantity of ' + item2 + ' is ' + quantityOfItem2 + '\n Total cost of your order is ' + totalPrice + ' PKR ' + '\n Discounted Price is ' + (totalPrice * 0.90) + ' PKR')
// }
// else {
//     alert('Shoping Chart \n Price of ' + item1 + ' is ' + priceOfItem1 + '\n Quantity of : ' + item1 + ' is ' + quantityOfItem1 + '\n Price of ' + item2 + ' is ' + priceOfItem2 + '\n Quantity of ' + item2 + ' is ' + quantityOfItem2 + '\n Total cost of your order is ' + totalPrice + ' PKR')

// }

//Q11
// var storeNumber = 5
// var guessNumber = +prompt('Guess the secret number!')

// if(guessNumber == 5){
//     alert("Bingo! Correct answer")
// }
// else if(guessNumber +1 == 5 || guessNumber -1 == 5){
//     alert("Close enough to correct the answer!")
// }
// else{
//     alert("Try again!")
// }

//Q12
// var user = +prompt("Enter any number!")
// if (user % 3 == 0) {
//     alert("Given number is divisible by 3")
// }
// else {
//     alert("Given number is not divisible by 3")
// }

//Q13
// var teamAName = prompt('Team A Name')
// var teamBName = prompt('Team B Name')
// var teamAScore = +prompt('Team A score')
// var teamBScore = +prompt('Team B score')
// if(teamAScore < teamBScore){
//     alert(teamAName + " won the match!")
// }
// else if(teamAScore > teamBScore){
//     alert(teamBName + " won the match!")
// }
// else if(teamAScore == teamBScore){
//     alert("Match Tie!")
// }

//Q14
// var name1 = prompt("enter name")
// var num1 = prompt("enter number")
// var flag = prompt("Choose True Or False")

// alert(name1 + " is a string")
// alert(num1 + " is a number")
// alert(flag + " is a boolean")

//Q15
// var num2 = +prompt("Enter any number")
// if (num2 % 2 == 0) {
//     alert("Given numver is even")
// }
// else {
//     alert("Given numver is odd")
// }

//Q16
// var temperature = +prompt("Enter temperatuer of Karachi")
// if(temperature > 40){
//     alert("It's to hot outside!")
// }
// else if(temperature > 30){
//     alert("The weather today is normal!")
// }
// else if(temperature > 20){
//     alert("Today's weather is cool!")
// }
// else if(temperature > 10){
//     alert("OMG, today weather is to cool!")
// }
// else if(temperature < 10){
//     alert("Ho he nh skta!")
// }

//Q17
// var num3 = +prompt("Enter first number")
// var num4 = +prompt("Enter second number")
// var operation = prompt("Choose your operation. \n 1) + \n 2) - \n 3) * \n 4) /")

// if(operation == '+'){
//     alert( num3 + operation + num4 + ' is ' + (num3+num4) )
// }
// else if(operation == '-'){
//     alert( num3 + operation + num4 + ' is ' + (num3-num4) )
// }
// else if(operation == '*'){
//     alert( num3 + operation + num4 + ' is ' + (num3*num4) )
// }
// else if(operation == '/'){
//     alert( num3 + operation + num4 + ' is ' + (num3/num4) )
// }

//Q18
// var today = prompt("Day name").toLowerCase()
// if(today == 'monday' || today == 'tuesday' || today == 'wednesday' || today == 'thursday' || today == 'friday'){
//     alert("It's a week day!")
// }
// else if(today == 'saturday'){
//     alert("It's a weekend!")
// }
// else if(today == 'sunday'){
//     alert("Yay! It's a holiday.")
// }

//Q19
// var userScore = + prompt("Enter your score")
// if(userScore > 50){
//     alert("You are passed.")
// }
// else{
//     alert("Try again!")
// }

//Q20
// var user1 = +prompt("Enter first number")
// var user2 = +prompt("Enter second number")

// if(user1 < user2){
//     alert(user2 + ' is greater than ' + user1)
// }
// else if(user1 > user2){
//     alert(user1 + ' is greater than ' + user2)
// }
// else{
//     alert("They are equal!")
// }

//Q21
// var language = prompt('Choose your language. \n 1) ka \n 2) de \n 3) en')
// if(language == 'de'){
//     alert('Hallo Welt')
// }
// else if(language == 'es'){
//     alert('გამარჯობა სამყარო')
// }
// else if(language == 'en' || language == ''){
//     alert('Hello World!')
// }

//Q22
// var num5 = +prompt("Type any number")
// if(num5 <0){
//     alert("Number is negative")
// }
// else{
//     alert("Number is positive")
// }