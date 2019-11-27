var secs = document.getElementById('seconds')
var mints = document.getElementById('mints')
var hours = document.getElementById('hurs')

function startWatch(){
    setInterval(()=>{
        secs.innerHTML++
        if(secs <= 59){
            secs.innerHTML = 0;
            mints.innerHTML++
        }
    },10)
}
// function stopWatch(){
//     clearInterval(startWatch)
// }

// function clearTime(){
// clearInterval(startWatch)
// }