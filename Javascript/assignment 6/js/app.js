var arr = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,true,false,true,false,true,false,true,false , ['Abc'],['Xyz'],['Etc'],['...']];
var chunks1 = []
var chunks2 = []
var chunks3 = []
var chunks4 = []
var nestedArr = []

for (var i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) == 'string'){
        nestedArr.push(arr[i])
    }
    if(typeof(arr[i]) == 'number'){
        nestedArr.push(arr[i])
    }
    if(typeof(arr[i]) == 'boolean'){
        nestedArr.push(arr[i])
    }
    if(typeof(arr[i]) == 'object'){
        nestedArr.push(arr[i])
    }

}
// console.log(nestedArr)
// console.log(chunks1)
// console.log(chunks2)
// console.log(chunks3)
// console.log(chunks4)