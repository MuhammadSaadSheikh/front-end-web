var num1 = +prompt('enter first number');
var num2 = +prompt('enter second number');
var operator = prompt('choose operator. \n 1.+ \n 2.- \n3.* \n 4./');

switch (operator){
    case '+':
        alert(num1 + num2)
        break;
        case '-':
        alert(num1 - num2)
        break;
        case '*':
        alert(num1 * num2)
        break;
        case '/':
        alert(num1 / num2)
        break;
        case '%':
            alert(num1 % num2)
            break;
        default:
            alert('Invalid operator!')
}