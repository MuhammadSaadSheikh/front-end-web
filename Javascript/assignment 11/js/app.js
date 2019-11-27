var date = new Date();
console.log('Today Date ==>',date)

var day = date.getDay()
console.log('Current Day==>',day)

var month = date.getMonth()
console.log('Current Month==>',month)

// var currentDate = date.toString()
// console.log(currentDate.slice(4,16))

var year = date.getFullYear()
console.log('Current Year==>',year)

var hrs = date.getHours()
console.log('Current Hour==>',hrs)

var mint = date.getMinutes()
console.log('Current Minut==>',mint)

var sec = date.getSeconds()
console.log('Current Second==>',sec)

var mili = date.getMilliseconds()
console.log('Current Millisecond==>',mili)


// var time = date.getTime()
// console.log('Current Time==>',time/1000)

var setYear = new Date(2022,06,14)
console.log('Set Year==>',setYear)

var months = date.setMonth(month +1)
// var months = months - month
console.log('Set Months==>', months)

var mints = date.setMinutes(100000)
var mints = mints - mint
console.log('Set Minuts==>',mints)

var secs = date.setSeconds(1111110000)
var secs = secs -sec
console.log('Set Seconds==>',secs)

var miliSec = date.setMilliseconds(432542543)
var miliSec = miliSec - mili
console.log('Set Miliseconds==>',miliSec)

var hurs = date.setHours(2)
var hurs = hurs - hrs
console.log('Set Hours==>', hurs)
