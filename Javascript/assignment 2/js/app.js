// var name = prompt("Enter your name")
// console.log(name)

var num = prompt("Enter First Number")
// console.log(num)

//comparison operators
var num1 = +prompt('Enter second number')
var num2 = +prompt('Enter third number');

if(num1 === num){
    console.log('Both number have same value and also same data type')
}
else if(num1 <= num2){
    console.log('Num1 is less then num2 or num1 is equal to num2.')
}
else if (num1 < num2){
    console.log('Num1 is lesser then num2')
}
else if(num1 >= num2){
    console.log('Num1 is greater than or equal to num2')
}
else if(num1 > num2){
    console.log('Num1 is greater than num2')
}
else if(num1 !== num2){
    console.log('Datatype are same!')
}

var gander = prompt("Enter your gender").toLowerCase()


//nested condition
if(gander== 'male'){
    var religious = prompt("Enter your religions. \n 1.Islam \n 2.Hindu \n 3.Other Religions").toLowerCase()
    if(religious == 'islam'){
        alert("You belongs to Islamic family.")
    }
    else if(religious == "hindu"){
        alert('You belongs to Hindu family.')
    }
    else{
        alert("You belongs to other Religion family.")
    }
}
else{
    alert("Not Allowed")
}