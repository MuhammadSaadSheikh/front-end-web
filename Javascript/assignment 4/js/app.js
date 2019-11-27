var students = ['Ali','Faizan','Sami','Saad'];
var obtainedMarks = [100,200,300,400];
var totalMarks = 500

console.log('Score of ' , students[0] , 'is' , obtainedMarks[0] , '. Percentage is' , (obtainedMarks[0]/totalMarks * 100) , '%.')
console.log('Score of ' , students[1] , 'is' , obtainedMarks[1] , '. Percentage is' , (obtainedMarks[1]/totalMarks * 100) , '%.')
console.log('Score of ' , students[2] , 'is' , obtainedMarks[2] , '. Percentage is' , (obtainedMarks[2]/totalMarks * 100) , '%.')

//Q2(Q)
var colorName = ['Red', 'Yellow', 'Green' , 'Black']
console.log(colorName)

// //Q2(B)
// var addInBegining = prompt('Wants to add at the beginning & add that color at the beginning of the array.')
// console.log('Length of array',colorName.unshift(addInBegining))
// console.log('Updated array', colorName)

// //Q2(C)
// var addInLast = prompt('Wants to add at the end & add that color at the end of the array')
// console.log('Length of array',colorName.push(addInLast))
// console.log('Updated array', colorName)

//Q2(D)
var firstColor = prompt('two more color at the beginning of the array. \n 1.First Color Name')
var secondColor = prompt('two more color at the beginning of the array. \n 2.Second Color Name')
console.log('Length of array',colorName.unshift(firstColor , secondColor))
console.log('Updated array', colorName)

//Q2(E)
var lastAddColor1 = prompt('two more color at the end of the array. \n 1.First Color Name')
var lastAddColor2 = prompt('two more color at the end of the array. \n 2.Second Color Name')
console.log('Length of array',colorName.push(lastAddColor1 , lastAddColor2))
console.log('Updated array', colorName)

//Q2(F)
console.log('Delete the first color from the array ==>' , colorName.shift())
console.log(colorName) 
//Q2(G)
console.log('Delete the last color from the array ==>' , colorName.pop())
console.log(colorName)

//Q2(H)
var addAnyWhere = prompt('Where you  wants to add a color define the index.')
var addColor = prompt('Where you  wants to add a color define color.')
colorName.splice(addAnyWhere , 0 , addColor)
console.log(colorName)

//Q2(I)
var startAnyWhere = prompt('Where you  wants to start delete  color define the index.')
var endeAnyWhere = prompt('Where you  wants to end delete  color define the index.')
colorName.splice(startAnyWhere , endeAnyWhere)
console.log(colorName)