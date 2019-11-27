function update(){
    var name = document.getElementById('txtField').value
    var opt = document.getElementById('abc').value
    if(opt == 1){
        document.getElementById('num1').innerHTML = name
    }
    else if(opt == 2){
        document.getElementById('num2').innerHTML = name
    }
    else if(opt == 3){
        document.getElementById('num3').innerHTML = name
    }
    else if(opt == 4){
        document.getElementById('num4').innerHTML = name
    }
    else if(opt == 5){
        document.getElementById('num5').innerHTML = name
    }
    else if(opt == 6){
        document.getElementById('num6').innerHTML = name
    }
    else if(opt == 7){
        document.getElementById('num7').innerHTML = name
    }
    else if(opt == 8){
        document.getElementById('num8').innerHTML = name
    }
    else if(opt == 9){
        document.getElementById('num9').innerHTML = name
    }
    else if(opt == 10){
        document.getElementById('num10').innerHTML = name
    }
    document.getElementById('txtField').value = ''
}