//Ans 1
function userName(){
    alert("Hello!")
}

//Ans 4, 5, 8, 9, 10
function changeColor(flag){
    console.log(flag)
    if(flag){
        document.getElementById('textField').style.backgroundColor = 'red'
    }
    else{
        document.getElementById('textField').style.backgroundColor = 'white'
    }
}

function length(){
    alert("Enter your name")
}

//Ans 11, 12
function para()
{
    var abc = document.getElementsByTagName('p')
    console.log(abc)
    for(var i=0; i<abc.length; i++){
        if([i] % 2 == 0 ){
            abc[i].style.color = 'red'
            abc[i].style.fontWeight = 'bold'
        }
        else{
            abc[i].style.color = 'blue'
        }
    }
}
para()