var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var opt = prompt('Enter your operator')

switch (opt) {
    case "+":
        console.log( num1 + num2)
        break
    case '-':
        console.log( num1 - num2)
        break
    case '*':
        console.log( num1 * num2)
        break
    case '/':
        console.log( num1 / num2)
        break
    case '%':
        console.log( num1 % num2)
        break
        default:
            alert('Invalid!')
}