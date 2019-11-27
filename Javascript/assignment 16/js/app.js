function alt(){
    alert("Hello!")
}


function btn(){
    alert("Hello!")
}

function userName(){
    var abc = prompt("Enter your name")
    alert("Hello, " + abc)
}

function userData(){
    var abc = prompt("Enter your name")
    var nameLength = abc.length
    alert('Hello! '+ abc + '\n User name lenght is ' + nameLength )
}

function price(id){
    if(id == 'vivo'){
        alert(id + ' Price : 54000 rupees')
    }
    else if(id == 'iphone'){
        alert(id + ' Price : 151,000 rupees')
    }
    else if(id == 'huawei'){
        alert(id + ' Price : 99,999 rupees')
    }
    else if(id == 'samsung'){
        alert(id + ' Price : 144,999 rupees')
    }
    else{
        alert("Invalid!")
    }
}


function mobilePic(id, flag){
    if(flag){
        document.getElementById(id).style.height = '400px'
        document.getElementById(id).style.width = '280px'
    }
    else{
        document.getElementById(id).style.height = '300px'
        document.getElementById(id).style.width = '180px'
    }
}