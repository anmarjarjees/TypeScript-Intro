"use strict";
const car = {
    name: "Nissan",
    type: "SUV",
    year: 1990
};
const employee1 = {
    id: 10,
    firstName: "Sam",
    lastName: "Simpson",
    isRetired: false
};
let client1 = {
    name: "Tom",
    email: "tomtom@nothing.com"
};
let player = {
    name: "Ronaldo",
    position: "Forward",
    age: 32,
    play: (game) => {
        console.log(`${player.name} plays ${game}. Position ${player.position} `);
    }
};
player.play("soccer");
const employee2 = {
    id: 10,
    firstName: "Alex",
    lastName: "Chow",
    isRetired: true
};
let currentTempUnit = 'F';
const myKeyboard = 61;
let code = 1234;
let accessCode = code;
let passCode = code;
const employee3 = {
    id: 12,
    firstName: "Sam",
    lastName: "Simpson",
    isRetired: false
};
const id1 = "abc123";
const id2 = 123;
const plate1 = {
    digits: 1234567,
    label: "AWP"
};
const plate2 = {
    label: "UML",
    digits: 998877
};
const plate3 = {
    digits: 1234567,
};
const student1 = {
    id: 123,
    firstName: "Tom",
    lastName: "Hanks",
    college: 'ILAC'
};
student1.id = 789;
student1.firstName = "James";
student1.lastName = "Bond";
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
console.log("Add: ", add(5, 2));
console.log("Div: ", div(5, 2));
function cloneEmpObj(sourceEmpObj) {
    return Object.assign({}, sourceEmpObj);
}
const anotherEmp3 = cloneEmpObj(employee3);
console.log("\nanotherEmp: ", anotherEmp3);
console.log("The data type of 'anotherEmp' is: ", typeof anotherEmp3 + "\n");
