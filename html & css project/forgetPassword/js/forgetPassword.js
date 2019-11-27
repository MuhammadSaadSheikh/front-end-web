

function changeInputField(id, flag){
    if(flag){
        document.getElementById(id).style.width = '50%'
        document.getElementById(id).style.transition = '1s';
        document.getElementById(id).style.color = 'black';
    }
    else{
        document.getElementById(id).style.width = '20%'
        document.getElementById(id).style.transition = '1s';
    }
}

function signIn(){
    location.href = "../signIn/signin.html"
}

