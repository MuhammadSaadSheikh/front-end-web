var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 20 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 28 }
]
console.log(arr)

//i
// for(var i=0; i<arr.length; i++){
//     if(i == 2){
//         arr[i].name = 'Siddiq'
//     }
// }
// console.log(arr)


// //ii
// arr.push({name : 'Umair', age : 23})
// console.log(arr)

// //iii
// arr.shift()
// console.log(arr)

// //iv
// var date = new Date()
// var todayDate = date.toString()
// var currentDate = todayDate.slice(4,15)
// console.log(currentDate)
// for(var i=0; i<arr.length; i++){
//     arr[i].date = currentDate
// }
// console.log(arr)

//2
// for(var i=0; i<arr.length; i++){
//     if(arr[i].age <= 28 && arr[i].age >= 18){
//         for(var j=0; j<arr[i].name.length; j++){
//             if(arr[i].name[j] == 'f'){
//                 console.log(arr[i].name)
//             }
//         }
//     }
// }

//3
var students = [
    {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }];

var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
]

var courseName = [];
var flag = false
// for (var i = 0; i < courses.length; i++) {
//     for (var j = 0; j < courses[i].std_id.length; j++) {
//         // console.log(courses[i].std_id[j])
//         for (var k = 0; k < students.length; k++) {
//             // console.log(students[k])
//             if (students[k]._id == courses[i].std_id[j]) {
//                 courseName.push(courses[i].name)
//                 students[k].coursesName = courseName
//                 // console.log('found')
//                 // flag = true
//                 // break
//             }
//         }
//         // if (flag) {
//         //     // courseName = courses[i].name 
//         // }
//     }
// }

// for(var i=0; i<students.length; i++){
//     // console.log('students ==>',students[i]._id)
//     for(var j=0; j<courses.length; j++){
//         // console.log('course==>' , courses[j])
//         console.log('course==>',[j] , courses[j].std_id)
//         // for(var k=0; k<courses[i].std_id.length; k++){
//         //     console.log(courses[i].std_id[k])
//             // if(students[i] == courses[j].std_id[k]){
//             //     students[i].courseName = courseName.push(courses[j].name) 
//             // }
//         // }
//     }
// }


// console.log(students)
