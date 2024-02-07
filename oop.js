import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
;
class Person {
    students = [];
    // create method for pushing data in student array
    addStudent(obj) {
        this.students.push(obj);
    }
}
;
const persons = new Person();
// console.log(person)
const start = async (persons) => {
    console.log("Welcome in the Classroom!!!");
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Checking Attendance?",
            choices: ["Information", "Students"]
        });
        if (ans.select == "Information") {
            console.log("If you want to check Attendance");
            console.log("Go! to the students section");
        }
        if (ans.select == "Students") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "std",
                message: ("Enter name for Confirmation :")
            });
            const student = persons.students.find(val => val.name == ans.std);
            if (!student) {
                const name = new Student(ans.std);
                persons.addStudent(name);
                console.log(`My name is ${name.name} and i am Present`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`I am ${student.name}, You have already Marked my Attendance`);
                console.log(persons.students);
            }
        }
    } while (true);
};
start(persons);
