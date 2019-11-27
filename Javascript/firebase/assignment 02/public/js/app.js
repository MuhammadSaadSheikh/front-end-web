// Your web app's Firebase configuration
const firebaseConfig = {
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


signUp = () => {
    let firstName = document.querySelector('#txtFirstName').value
    let lastName = document.querySelector('#txtLastName').value
    let email = document.querySelector('#ixtEmail').value
    let password = document.querySelector('#txtPassword').value
    console.log(email)
    console.log(password)
    try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                alert('SignUP Successfully!')
                console.log(res.user.uid)
                localStorage.setItem('userId' , res.useruid)
            })
    } catch (error) {
        alert('error => ', error)
    }
}


signIn = () =>{
    let email = document.querySelector('#ixtEmail').value
    let password = document.querySelector('#txtPassword').value

    try {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res =>{
            alert("User logout successfully")
            localStorage.removeItem('userId')
        })
        
    } catch (error) {
        console.log('error =>' , error)
    }
}

