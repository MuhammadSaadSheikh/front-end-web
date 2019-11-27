function enterCard() {
    document.querySelector('#container1').style.display = "none"
    document.querySelector('#wrapper1').style.display = "block"
}

//check users in localStorage
var arr = []
if (!localStorage.getItem('usersData')) {
    localStorage.setItem('usersData', JSON.stringify([]))
}

//wrongPins
if (!localStorage.getItem('wrongPin')) {
    localStorage.setItem('wrongPin', JSON.stringify([]))
}

var newUser = {
    amount: 500,
}

//Account Number
function checkAccountNumber() {
    var data = JSON.parse(localStorage.getItem('usersData'))
    var num = document.querySelector('#userAccountNumber').value
    localStorage.setItem('userAcconut', JSON.stringify(num))

    if (num.length > 5 || num.length < 5) {
        alert('Please enter 5 digits Account Number')
        document.querySelector('#userAccountNumber').value = ''
    }
    else {
        if (data.length) {
            var flag = false
            for (var i = 0; i < data.length; i++) {
                if (data[i].accountNumber == num) {
                    flag = true
                    break
                }
            }
            if (flag) {
                alert('Account Nmuber Match!')
                document.querySelector("#wrapper1").style.display = 'none'
                document.querySelector("#wrapper2").style.display = 'block'
                document.querySelector('#userAccountNumber').value = ''

            }
            else {
                document.querySelector("#wrapper1").style.display = 'none'
                document.querySelector("#wrapper2").style.display = 'block'
                document.querySelector('#userAccountNumber').value = ''
                alert("Welcome")
                // return newUser.accountNumber = num
            }
        }
        else {
            document.querySelector("#wrapper1").style.display = 'none'
            document.querySelector("#wrapper2").style.display = 'block'
            document.querySelector('#userAccountNumber').value = ''
            alert("Welcome")
            // return newUser.accountNumber = num
        }
    }
}

//PinCode
function cancelPin() {
    document.querySelector('#pinCode').value = ""
}

//Check pin code
function checkPinCode() {
    debugger
    var data = JSON.parse(localStorage.getItem('usersData'))
    var num = JSON.parse(localStorage.getItem('userAcconut'))
    var userPin = document.querySelector("#userPinCode").value;
    var keys = JSON.parse(localStorage.getItem('wrongPin'))
    console.log('keys ==>', keys.length)
    console.log('data ==> ', data)

    // if (keys.length == 3) {
    //     for (var i = 0; i < data.length; i++) {
    //         if (data[i].accountNumber == num) {
    //             data.splice(i , 1)
    //             console.log(data)
    //             localStorage.removeItem("userAcconut")
    //             localStorage.removeItem('wrongPin')
    //             location.reload()
    //             alert('You enter wrong pin multiple times so your account account is blocked !')
    //         }
    //     }
    // }
    // else {
        if (userPin.length < 4 || userPin.length > 4) {
            alert('Please enter 4 digits pin.')
            document.querySelector("#userPinCode").value = "";
        }
        else {
            if (data.length) {
                alert("enter in data")
                var flag = false
                for (var i = 0; i < data.length; i++) {
                    if (data[i].accountNumber == num) {
                        alert('Account number matched')
                        if (data[i].cardPin != userPin) {
                            keys.push(userPin)
                            localStorage.setItem('wrongPin' , JSON.stringify(keys))
                            document.querySelector("#userPinCode").value = ''
                            alert('You enter the wrong pin !')
                            if (keys.length == 3) {
                                for (var i = 0; i < data.length; i++) {
                                    if (data[i].accountNumber == num) {
                                        data.splice(i , 1)
                                        localStorage.setItem('usersData' , JSON.stringify(data))
                                        console.log(data)
                                        localStorage.removeItem("userAcconut")
                                        localStorage.removeItem('wrongPin')
                                        location.reload()
                                        alert('You enter wrong pin multiple times so your account account is blocked !')
                                        break
                                    }
                                }
                            }
                            else{
                                alert("Please enter the correct key.")
                                return userPin;
                            }
                        }
                        else {
                            alert("User key match")
                            flag = true
                            break;
                        }
                    }
                }
                if (flag) {
                    alert("Data matched !")
                    localStorage.removeItem("wrongPin")
                    // let keyFound = false
                    // for (var i = 0; i < data.length; i++) {
                    //     if (data[i].cardPin != userPin) {
                    //         alert("You enter the wrong pin")
                    //         keys.push(userPin)
                    //         if (keys.length == 3) {
                    //             return keys.length
                    //         }
                    //         else {
                    //             localStorage.setItem('wrongPin', JSON.stringify(keys))
                    //             document.querySelector('#userPinCode').value = ''
                    //             return userPin;
                    //         }
                    //     }
                    //     else {
                    //         alert('Pin Matched')
                    //         keyFound = true
                    //         break
                    //     }
                    // }
                    // if (keyFound) {
                    //     alert('User already axsist')
                    //     newUser.accountNumber = num
                    //     newUser.cardPin = userPin
                    //     data.push(newUser)
                    //     localStorage.setItem('usersData', JSON.stringify(data))
                    //     location.replace('../options/index.html')
                    // }
                }
                else {
                    newUser.accountNumber = num
                    newUser.cardPin = userPin
                    data.push(newUser)
                    localStorage.setItem('usersData', JSON.stringify(data))
                    alert('Line 172 Your account is create.')
                }
            }
            else {
                newUser.accountNumber = num
                newUser.cardPin = userPin
                console.log(newUser)
                data.push(newUser)
                localStorage.setItem('usersData', JSON.stringify(data))
                alert('Line 181 Your account is create.')
            }
        }
    }
// }


