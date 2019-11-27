let api ='https://jsonplaceholder.typicode.com/albums';

fetch(api)
.then(res => res.json())
.then(doc => console.log(doc))
.catch(err => console.log(err))


//default parameter
// let num1 = prompt('first number')
// let num2 = prompt('second number')

// function para(5,6){
//     return  num + num
// }
// console.log(para(num1,num2))

let arr1 = [1,2,3,4,5,6]
let arr2 =  [2,3,...arr1,4,5,8] 
console.log(' SPREAD OPERATORS' , arr2)

console.log('ARRAY REVERSE' , arr2.reverse())

