// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3Mx44mtFb1SqoK61EgWSvV5z06ZdEjTs",
    authDomain: "quiz-app-1fd61.firebaseapp.com",
    databaseURL: "https://quiz-app-1fd61.firebaseio.com",
    projectId: "quiz-app-1fd61",
    storageBucket: "quiz-app-1fd61.appspot.com",
    messagingSenderId: "911921076375",
    appId: "1:911921076375:web:a500d19cf83f2a1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// function checkWindowWidth(a){
//     if(a.matchMedia){

//     }
// }
// var a = window.matchMedia('(max-width: 700px)')
// checkWindowWidth(a)

function signUp() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var userName = document.getElementById('userName').value
    var email = document.getElementById('userEmail').value
    var password = document.getElementById('userPassword').value
    var confirmPassword = document.getElementById('confirmPassword').value

    try {
        if(firstName == '' || lastName == '' || userName == '' || email == '' || password == '' || confirmPassword == ''){
            alert('Please fill all input fields!')
            location.reload()
        }
        else{
            if(password != confirmPassword){
                alert('Password are not same!')
                document.getElementById('userPassword').value = ''
                document.getElementById('confirmPassword').value = ''
            }
            else{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res=>{
                    localStorage.setItem('userId', res.user.uid)
                    //save user data
                    var userData = {
                        firstName,
                        lastName,
                        userName,
                        email
                    }
                    db.collection('users').doc(res.user.uid).set(userData)
                    .then(()=>{
                        // console.log(doc.data())
                        alert("Account create successfully!")
                        location.href = '../index.html'
                    })
                })
            }
        }
    } catch (error) {
        console.log(error.message)
    }

}
function changeInputField(id, flag) {
    if (flag) {
        document.getElementById(id).style.width = '50%'
        document.getElementById(id).style.transition = '1s';
        document.getElementById(id).style.color = 'black';
    }
    else {
        document.getElementById(id).style.width = '18%'
        document.getElementById(id).style.transition = '1s';
    }
}

function signIn() {
    location.href = "../signIn/signin.html"
}

