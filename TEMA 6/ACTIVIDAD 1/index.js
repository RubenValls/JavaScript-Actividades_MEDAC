class Student{
    name = ""
    surname= ""
    age= ""
    city= ""

    constructor(name,surname,age,city){
        this.name = name,
        this.surname = surname,
        this.age = age,
        this.city = city
    }

    toString(){
        return this.name + " " + this.surname + " " + this.age + " " + this.city + "."
    }
}

let student1 = new Student("Mario", "Rodriguez", "22", "Mexico")
let student2 = new Student("Maria", "Pérez", "19", "Toronto")
let student3 = new Student("Patricia", "Scholes", "25", "Utah")
let student4 = new Student("Nick", "Williams", "30", "New York")

studentsArray = [student1, student2, student3, student4]

let node = document.querySelector("#classes")

studentsArray.forEach(student => {
    let element = document.createElement("li")
    node.appendChild(element).innerHTML = student.toString()
    console.log(student)
})