// let api ='https://jsonplaceholder.typicode.com/albums';

// fetch(api)
// .then(res => res.json())
// .then(doc => console.log(doc))
// .catch(err => console.log(err))


//default parameter
// let num1 = prompt('first number')
// let num2 = prompt('second number')
// para =(num1 = 3, num2 = 4) => num1*num2
// console.log(para())

// let arr1 = [1,2,3,4,5,6]
// let arr2 =  [2,3,...arr1,4,5,8] 
// console.log(' SPREAD OPERATORS' , arr2)

// console.log('ARRAY REVERSE' , arr2.reverse())

//query selector
// let wrapper = document.querySelector('#mainWrapper')
// console.log(wrapper)

//map object
// let obj = {
//     name : ['ali', "ahmed" , 'sameer'],
//     courses : 'Computer',
//     age : [20,34,65] 
// }
// let abc =  obj.map(val =>{
//    return val
// })
// console.log(abc)


let arr = [11,23,55,12]
console.log(arr)
let abc = new Set(arr)
console.log(abc)
