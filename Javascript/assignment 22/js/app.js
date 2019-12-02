function UserData(name, age, id, course) {
    this.name = name,
    this.age = age,
    this.id = id,
    this.course = course
}
UserData.prototype.city = 'Karachi'



data = () =>{
    var name = prompt('Enter your name')
    var age = +prompt('Enter your age')
    var id = +prompt('Enter your id')
    var course = prompt('Enter your course')
    var details = new UserData(name, age, id, course)
    console.log(details)
}