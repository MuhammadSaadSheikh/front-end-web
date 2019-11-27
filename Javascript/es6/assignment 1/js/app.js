//call back function

// fun1 = ()=>{
//     fun2();
//     alert("function 1")
// }

// fun2 = ()=>{
//     fun3()
//     alert('Function 2')
// }

// fun3=()=>{
//     alert('Function 3')
// }
// fun1()

//promise
// let pro = new Promise((resolve , reject)=>{
//     if(age = 34){
//         resolve('Age matched!');
//     }
//     else{
//         reject('Age doesnot matched!')
//     }
// })

// pro1.then(result => console.log(result))
// .catch(err => console.log(err))

//promise race + promise all
let pro1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('first promise won')
    }, 2000)
})

let pro2 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('second promise won')
    }, 1000)
})

let pro3 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('third promise won')
    },4000)
})

const allPro = [pro1, pro2, pro3]

// Promise.race(allPro)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// Promise.all(allPro)
// .then(res => console.log(res))
// .catch(err => console.log(err))