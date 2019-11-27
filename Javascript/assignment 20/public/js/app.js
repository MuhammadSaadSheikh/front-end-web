var mainWrapper = document.getElementById('mainWrapper')
mainWrapper.setAttribute('class', 'mainDiv')

var loginWrapper = document.createElement('div')
loginWrapper.setAttribute('class' , 'userDataWrapper')
mainWrapper.appendChild(loginWrapper)

var heading = document.createElement('h1')
heading.innerHTML = 'Login'
heading.setAttribute('class' , 'heading')
loginWrapper.appendChild(heading)

var textField = document.createElement('input')
textField.setAttribute('type' , 'email')
textField.setAttribute('placeholder' , 'abc@gmail.com')
textField.setAttribute('class' , 'inputField')
textField.setAttribute('id' , 'txtEmail')
loginWrapper.appendChild(textField)

var passwordField = document.createElement('input')
passwordField.setAttribute('type' , 'password')
passwordField.setAttribute('placeholder' , '********')
passwordField.setAttribute('class' , 'passwordField')
passwordField.setAttribute('id', 'txtPassword')
loginWrapper.appendChild(passwordField)

var btn = document.createElement('button')
btn.setAttribute('onclick' , 'login()')
btn.setAttribute('class' , 'btn')
btn.innerHTML = 'Login'
loginWrapper.appendChild(btn)


function login(){
    alert("Successfully Login!")
    var email = document.getElementById('txtEmail').value
    var password = document.getElementById('txtPassword').value
    localStorage.setItem('userEmail' , email)
    localStorage.setItem('userPassword' , password)
    document.getElementById('txtEmail').value = ''
    document.getElementById('txtPassword').value = ''
}