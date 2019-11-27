// var studentsNames = ['Ali', 'Kashif', 'Azhar']
// var marksObtained = [346, 345, 456]
// var totalMarks = 500;

// console.log('Score of ' + studentsNames[0] + ' is ' + marksObtained[0] + '. Percentage is ' + (marksObtained[0] * 100 / 500) + '%')
// console.log('Score of ' + studentsNames[1] + ' is ' + marksObtained[1] + '. Percentage is ' + (marksObtained[1] * 100 / 500) + '%')
// console.log('Score of ' + studentsNames[2] + ' is ' + marksObtained[2] + '. Percentage is ' + (marksObtained[2] * 100 / 500) + '%')

// var colorName = ['Red', 'brown', 'black', 'yellow']
// console.log(colorName)

//a
// var user1 = prompt("what color he/she wants to add to the beginning")
// var result1 = colorName.unshift(user1)
// console.log(colorName)

//b
// var user2 = prompt('what color he/she wants to add to the end')
// var result2 = colorName.push(user2)
// console.log(colorName)

//c
// var user3 = prompt("Add first color to the beginning")
// var user4 = prompt("Add second color to the beginning")
// var result3 = colorName.unshift(user3, user4)
// console.log(colorName)

//d (Delete the first color in the array)
// var user5 = colorName.shift()
// console.log(colorName)

//e( Delete the last color in the array)
// var user6 = colorName.pop()
// console.log(colorName)

//f( Ask the user at which index he/she wants to add a color)
// var user7 = +prompt('which index he/she wants to add a color')
// var user8 = prompt('which index he/she wants to add a color name')
// var result7 = colorName.splice(user7  ,0 , user8)
// console.log(colorName)

//g (Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete)
// var user9 = +prompt('which index he/she wants to delete color(s)')
// var user10 = +prompt('how many colors he/she wants to delete')
// var result10 = colorName.slice(user9 , user10)
// console.log(result10)
// console.log(colorName)


//Q3
// var num1 = +prompt("Enter the table number")
// for(var i=1; i<=10; i++){
//     console.log(num1 + ' x ' + i + ' = ' + (num1*i ))
// }

//Q4
// for (var i = 0; i < 5; i++) {
//     document.write('*****')
//     document.write('</br>')
// }

// for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < i; j++) {
//         document.write('*')
//     }
//     document.write('</br>')
// }

// for (var i = 0; i < 6; i++) {
//     for (var j = 6; j > i; j--) {
//         document.write('*')
//     }
//     document.write('</br>')
// }

// var name1 = prompt('enter your name')
// alert('Hi , ' + name1)

// var num2 = +prompt("enter table number")
// for(var i=0; i<=10; i++){
//     document.write(num2 + ' x ' + i + ' = ' + (num2*i))
//     document.write("</br>")
// }

// var city = prompt("enter your city name").toLowerCase()
// if(city == 'karachi'){
//     alert("Welcome to the city of light")
// }
// else{
//     alert('Welcome to ' + city)
// }

// var gender = prompt("enteryour gender").toLowerCase()
// if(gender == 'male'){
//     alert('Good Morning Sir.')
// }
// else if(gender == 'female'){
//     alert("Good Morning Ma’am.")
// }
// else{
//     alert('Daya kuch ko garbar hy!')
// }

// var signal =prompt('road traffic signal color').toLowerCase()
// if(signal == 'red'){
//     alert('vehicles must stop')
// }
// else if(signal == 'yellow'){
//     alert('vehicles should get ready to move')
// }
// else if(signal == 'green'){
//     alert('vehicles can move now')
// }
// else{
//     alert('Invalid input!')
// }

// var age = + prompt('enter your age')
// if(age <= 20){
//     alert('“You are welcome”')
// }
// else{
//     alert('You are not allowed!')
// }

// var remainingFuel = +prompt('enter the current fuel of vechicel!')
// if(remainingFuel <= 0.25){
//     alert('“Please refill the fuel in your car”')
// }
// else{
//     var fule = Math.floor(Math.random() * 15)
//     alert("Remaining fule in your vechicel is " + fule + ' liters')
// }

// var a = 4
// if(++a === 5){
//     console.log('given condition for varialbe (a) is true.')
// }
// else{
//     console.log('given condition for varialbe (a) is false.')
// }

// var b = 82
// if(b++ == 83){
//     console.log('given condition for varialbe (b) is true.')
// }
// else{
//     console.log('given condition for varialbe (b) is false.')
// }

// var c = 12
// if(c++ === 13){
//     console.log('condition 1 is true!.')
// }
// if(c === 13){
//     console.log('condition 2 is true!.')
// }
// if(++c < 14){
//     console.log('condition 2 is true!.')
// }
// if(c === 14){
//     console.log('condition 4 is true!.')
// }
// else{
//     console.log('All conditios are wrong!')
// }

// var materialCost = 20000;
// var laburCost = 20000;
// var totalCost = materialCost + laburCost;
// if(totalCost === materialCost + laburCost){
//     alert("The cost equal!")
// }
// else{
//     alert("The cost not equal!")
// }

// if (true) {
//     alert('True')
// }
// if (false) {
//     alert('False!')
// }
// else{
//     alert("Ivlaid input!")
// }

// if('car' < 'cat'){
//     alert('Car is smaller than cat')
// }
// else{
//     alert('Cat is smaller than car')
// }

// var userMarks = +prompt('Enter your obtained marks out of 500')
// var totalMarks = 500;
// var per = userMarks /500 * 100

// if(per >= 80){
//     console.log('MARK SHEET')
//     console.log('Marks Obtained : ' + userMarks)
//     console.log('Percentage : ' + per + "%")
//     console.log('Grade : A-one' )
//     console.log('Remarks : Excellent')
// }
// else if(per >= 70){
//     console.log('MARK SHEET')
//     console.log('Marks Obtained : ' + userMarks)
//     console.log('Percentage : ' + per + "%")
//     console.log('Grade : A' )
//     console.log('Remarks : Good')
// }
// else if(per >= 60){
//     console.log('MARK SHEET')
//     console.log('Marks Obtained : ' + userMarks)
//     console.log('Percentage : ' + per + "%")
//     console.log('Grade : B' )
//     console.log('Remarks : you need to improve')
// }
// else if(per < 50){
//     console.log('MARK SHEET')
//     console.log('Marks Obtained : ' + userMarks)
//     console.log('Percentage : ' + per + "%")
//     console.log('Grade : Fail' )
//     console.log('Remarks : Sorry')
// }
// else{
//     console.log("Invalid Input!")
// }

// var gusetNum = +prompt("Guset the hideen number!")
// var randomNum = Math.floor(Math.random() * 11)
// console.log(randomNum)
// if(gusetNum == randomNum){
//     alert("Bingo! Correct answer!")
// }
// else if(randomNum == gusetNum+1 || randomNum == gusetNum-1){
//     alert("Close enough to the corrat answer")
// }
// else{
//     alert("Try again!")
// }

// var num3 = +prompt("Enter number")
// if(num3 % 3 == 0){
//     alert("Given number is divisible by 3")
// }
// else{
//     alert("Given number is not divisible by 3")
// }

// var teamA = Math.floor(Math.random() * 50)
// var teamB = Math.floor(Math.random() * 50)
// console.log('Team A Score ==> '+ teamA) 
// console.log('Team B Score ==> '+ teamB)

// if(teamA < teamB){
//     alert("Team B won the Match")
// }
// else if(teamA > teamB){
//     alert("Team A won the Match")
// }
// else{
//     alert('Match Tie!' )
// }
