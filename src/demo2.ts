// TypeScript Type Aliases and Interfaces
// Link: https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php

// Working with literal objects:
// To recap, check the simple JS object below:
const car = {
    name: "Nissan",
    type: "SUV",
    year: 1990
}
/*
In JS, we can attach properties/method dynamically to any oject,
but with TS we cannot do it:
*/
// car.owner="alex";
/*
Error Message:
Property 'owner' does not exist on type '{ name: string; type: string; year: number; }'.
*/

/*
TS give us the options to define the data types for its properties:
*/
const employee1: {
    id: number,
    firstName: string,
    lastName: string,
    isRetired: Boolean
} = {
    id: 10,
    firstName: "Sam",
    lastName: "Simpson",
    isRetired: false
}

// Adding optional properties:
let client1: {
    name: string,
    email: string,
    website?: string
} = {
    name: "Tom",
    email: "tomtom@nothing.com"
}

// Adding properties and methods:
let player: {
    name: string,
    position: string,
    age: number,
    play: (game: string) => void
} = {
    name: "Ronaldo",
    position: "Forward",
    age: 32,
    play: (game: string) => {
        console.log(`${player.name} plays ${game}. Position ${player.position} `)
    }
}
// Link: https://en.wikipedia.org/wiki/Association_football_positions
player.play("soccer"); // Ronaldo plays soccer. Position Forward

// Type Aliases:
/*
Make it cleaner using "type"
creating a new custom type of type "Employee"
by convention, using PascalCase
*/
type Employee = {
    id: number,
    firstName: string,
    lastName: string,
    isRetired: Boolean
}

const employee2: Employee = {
    id: 10,
    firstName: "Alex",
    lastName: "Chow",
    isRetired: true
}

/*
We practiced the "Literal Types" in one of the previous demos
Link: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"

For better and more cleaner use:
We can combine the "Literal Types" with "Type Aliases" :-)
*/
type Temp = 'F' | 'C'
let currentTempUnit: Temp = 'F';

// Another Example:
/*
Musical Keyboard Keys:
> 49 keys with four octaves
> 61 keys with five octaves
> 73 keys with six octaves
> 76 keys with six and a half octaves
> 88 keys with seven and a quarter octaves
*/
type key = 49 | 61 | 73 | 76 | 88;
const myKeyboard: key = 61;

// Error below:
// const alexKeyboard: key = 80;
// Error: Type '80' is not assignable to type 'key'

// Type Assertion: <>
let code: any = 1234;
let accessCode = <number>code; // will be a number

// Test:
// accessCode = "Test";
// Error: Type 'string' is not assignable to type 'number'

// OR: using this way:
let passCode = code as number;


// Interfaces:
/*
Similar to custom user type as we did with "Type Employee"
*/
// The example of "type" 
type Customer = {
    id: number,
    firstName: string,
    lastName: string,
    isActive: Boolean
}

interface EmployeeInterface {
    id: number,
    firstName: string,
    lastName: string,
    isRetired: Boolean
}

const employee3: EmployeeInterface = {
    id: 12,
    firstName: "Sam",
    lastName: "Simpson",
    isRetired: false
}

/*
The following code will generate an error:
"Property 'isRetired' is missing in type
'{ id: number; firstName: string; lastName: string; }'
but required in type 'EmployeeInterface'."

Because we didn't add/implement "isRetired":
*/

/*
const employee4: EmployeeInterface = {
    id: 10,
    firstName: "Sam",
    lastName: "Simpson",
}
*/

/*
Type vs Interface:
*/

// "type" can be used with primitive data types
type UserID = number | string;

const id1: UserID = "abc123";
const id2: UserID = 123;

// "interface" CANNOT be used with primitive data types:
// interface plateNumber = number;
// Error: '{' expected

// Another example about interface with optional property
interface plateInterface {
    digits: number,
    // The following property is optional: "?"
    label?: string,
}

const plate1: plateInterface = {
    digits: 1234567,
    label: "AWP"
}

const plate2: plateInterface = {
    label: "UML",
    digits: 998877
}

const plate3: plateInterface = {
    digits: 1234567,
}

// Error: Property 'digits' is missing in type
/*
const plate4: plateInterface = {
    label: "AWP
}
*/

// Another example about interface with readonly property
interface StudentInterface {
    id: number,
    firstName: string,
    lastName: string,
    readonly college: string
}

const student1: StudentInterface = {
    id: 123,
    firstName: "Tom",
    lastName: "Hanks",
    college: 'ILAC'
}

student1.id = 789;
student1.firstName = "James";
student1.lastName = "Bond";
/*
Error: Cannot assign to 'college' because it is a read-only property.
*/
// student1.college='ABC';

// Interfaces with functions: Function Interface
interface doMathFunc {
    (n1: number, n2: number): number
}

// with arrow function:
const add: doMathFunc = (x: number, y: number): number => x + y;
const sub: doMathFunc = (x: number, y: number): number => x - y;
const mul: doMathFunc = (x: number, y: number): number => x * y;
const div: doMathFunc = (x: number, y: number): number => x / y;

console.log("Add: ", add(5, 2)); // Add:  7
console.log("Div: ", div(5, 2)); // Div:  2.5

/*
Another example: Applying "Interface" to function parameter:
*/
/*
The following JavaScript function "cloneEmpObj()":
- accepts a parameter of "EmployeeInterface" Interface data type only
- return a clone of that object 

In Java :-)
As we did with Java using a functional programming to clone an object
notice that clone an object is not the same as copy an object:
(clone an object create a separate variable copy that pointing to different location)

In JavaScript:
we can use the "Object" method named "assign()". Notice that another method ".apply()" can be used also.

Hint:
For more details, refer to my repo about "EcmaScript" => "Part3-Objects-Classes"
Filename is "02.object-spread-operator.html"
Link: https://github.com/anmarjarjees/ECMAScript6/blob/main/Part3-Objects-Classes/02.object-spread-operator.html
Or check the MDN:
Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

Notice below if we omit the return type "EmployeeInterface"
It will be inferred automatically by TSC according to the parameter data type:
Function cloneEmpObj(sourceEmpObj: EmployeeInterface): EmployeeInterface
*/
function cloneEmpObj(sourceEmpObj: EmployeeInterface): EmployeeInterface {
    return Object.assign({}, sourceEmpObj);
}

// Cloning the object "employee3" of type "EmployeeInterface" interface
const anotherEmp3 = cloneEmpObj(employee3);
console.log("\nanotherEmp: ", anotherEmp3); // will output all the same members of employee3
console.log("The data type of 'anotherEmp' is: ", typeof anotherEmp3 + "\n");
// The data type of 'anotherEmp' is:  object

/*
To recap:
- tsc to compile (anywhere since TS was globally installed)
- node .js file to run (inside the "final" folder)
*/