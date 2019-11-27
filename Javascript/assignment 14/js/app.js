var num1 = +prompt('enter first number')
var num2 = +prompt('enter second number')
var operator = prompt('chppse operator \n 1. + \n2.- \n 3.* \n44./')

// debugger
function calculator(operator) {
    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            alert("Invalid")
    }
}

var result = calculator(operator)
console.log(result)