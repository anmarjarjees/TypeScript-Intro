"use strict";
class Student {
    constructor(id, fName, lName) {
        this.college = "ILAC";
        this.email = "student_name@studyatilac.com";
        this.id = id;
        this.firstName = fName;
        this.lastName = lName;
    }
    printFullName() {
        console.log("Full Name: " + this.firstName + " " + this.lastName);
    }
}
const st1 = new Student(123, "Alex", "Chow");
const st2 = new Student(456, 'Sam', 'Simpson');
st1.printFullName();
st2.printFullName();
