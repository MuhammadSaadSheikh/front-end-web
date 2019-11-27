var userId = localStorage.getItem('userAcconut')
if (!userId) {
    location.replace('../index.html')
}

function getCash() {
    var data = JSON.parse(localStorage.getItem(usersData))
    var accountNum = JSON.parse(localStorage.getItem(userAcconut))

    if (data.length) {
        flag = false
        for (var i = 0; i < data.length; i++) {
            if (accountNum == data[i].cardNumber) {
                flag = true
                break
            }
        }
    }


}

function logOut() {
    localStorage.removeItem('userAcconut')
    location.replace('../index.html')
}