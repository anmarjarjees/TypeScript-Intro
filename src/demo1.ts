console.log("Hello TypeScript!");
let number = 5; // In JS:

/*
To recap, JavaScript has three very commonly used primitives: 
> string
> number
> boolean.

JavaScript all data types:
- Primitive Data Types:
-----------------------
- Null
- Undefined
- Boolean
- Number
- BigInt
- String	
- Symbol
Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values

- Object Datatype:
------------------
- Object
- Array
- Date
Link: https://www.w3schools.com/js/js_datatypes.asp

TypeScript also added:

Link: https://www.w3schools.com/typescript/typescript_special_types.php
- any
- unknown
- never
- enum: a special "class" that represents a group of constants (unchangeable variables)
Link: https://www.w3schools.com/typescript/typescript_enums.php
- tuple: A tuple is a typed array with a pre-defined length and types for each index
Link: https://www.w3schools.com/typescript/typescript_tuples.php
*/

// In TypeScript:
// Creating a variable of type "number"
let value: number = 7;

console.log("Number: " + number);
console.log('Value: ' + value);

// Basic Types: Primitive Types
let num: number = 5;

// We can separate a large number with "underscores" _ :
let largeNum: number = 1111_1234_5555_6666;
let college: string = "ILAC";
let isValid: boolean = true; // false

/*
TSC can deduct the data type of the variable according to its value 
when it's initialized:
Check the types of the two variables below: var1Hover and var2Hover
By hovering over them, there data types will automatically be inferred
*/
let var1Hover = 200; // let var1Hover: number
let var2Hover = "JavaScript"; // let var2Hover: string
/*
Usually when we have an implicit type as above,
each one data type is obvious and will be determined implicitly by TSC:
- var1Hover contains "number"
- var2Hover contains "string"
so no need to explicity define their types! 
*/

// Check the code line below:
// var2Hover = true; // TSC will generate an error
// Error: Type 'boolean' is not assignable to type 'string'

/*
Using "any" to represent any type of value:
It's not considered to be a good coding practice (not a good idea)
Because TS is designed for "Type Safety" 
which is the mean reason for coding with TypeScript!
*/
//
let x: any = 'TypeScript'
x = true;
x = 100;

// if we declare a variable without initializing it, TS will make it "any"
let y; // let y: any

// Arrays:
/*
In JS:
let exams = [81, 92, 83];
let mixArr = [true,45.65,89,"Test"];
*/
let exams: number[] = [90, 92, 88];

// exams.push("test"); // Error:
// Argument of type 'string' is not assignable to parameter of type 'number'

let myArray: any[] = [1, true, 'Java'];

// Tuple:
/*
> A typed array with a pre-defined (fixed) length where each element has a data type
> Each index have a data type and the array length is fixed
> TSC will compile tuple to a simple/normal JS array
> It's usually used with two values (elements)s to act as key/value, for learning we used 4 values below

In the example below, we cannot add a fifth element as we only defined 4 data types for 4 elements:
*/
let student: [number, string, string, boolean] = [10304, 'Alex Chow', 'CMPG', true];

// Tuple Array:
let classrooms: [number, string][];
classrooms = [
    [312, "JS Frameworks"],
    [313, "PHP and MySQL"],
    [110, "ASP.NET"],
    [205, "Java"],
];

// Union: variable's value can be more than a single type
// Link: https://www.w3schools.com/typescript/typescript_union_types.php
// One variable that can hold multiple types:
let classroom: string | number;
classroom = 'C312';


// Literal Types
// Link: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
/*
Let's suppose we need to assign a numeric value to a variable,
this value can only be 7123
*/
let passKey: 7123 = 7123;

// let passNum: 1234 = 1235;
// Error: Type '1235' is not assignable to type '1234'

/*
Look at the example below with multiple values:
Later we will use it with "Literal Alias"...
*/
let keys: 61 | 73 | 88 = 88;
keys = 61;
keys = 73;
// keys = 76; 
// Error: Type '76' is not assignable to type '61 | 73 | 88'


/*
TypeScript Paragraph:
It's not much use to have a variable that can only have one value!
But by combining literals into unions, 
you can express a much more useful concept 
for example, functions that only accept a certain set of known values:

notice that functions will be covered in detailed later...
*/

function printDevInfo(name: string, title: "Front-End" | "Back-End" | "Full-Stack") {
    console.log(`${name} is a ${title} developer`);
}

// While typing TSC will show us the 3 options :-)
printDevInfo("Alex", "Front-End");
printDevInfo("Dave", "Back-End");
printDevInfo("Sarah", "Full-Stack");

// Enum: 
/*
- A group/list of related constants
- 0 based index like arrays/strings
- Using "PascalCase" as naming convention for the variable and its members
- Same idea as with Java and C#

Link: https://www.w3schools.com/typescript/typescript_enums.php
*/
enum Languages {
    Java,
    PHP,
    Python,
    JavaScript,
    Csharp,
    TypeScript
}

console.log(Languages.Java); // 0
console.log(Languages.TypeScript); // 5

// Now we can declare and initialize a new variable of type "Languages":
const currentLanguageIndex: Languages = Languages.TypeScript;

// check code below:
console.log(`We are learning ${Languages[currentLanguageIndex]} now`);
// We are learning TypeScript now

// We can override the default index value 
// make first one to be 1 and the rest will be changed correspondingly
enum Days {
    Mon = 1,
    Tue,
    Wed,
    Thu,
    Fri
}

console.log(Days.Mon); // 1
console.log(Days.Fri); // 5

/*
We can change the index values from numbers to strings,
but in this case we have to explicitly set it for each member
*/
enum Provinces {
    Ontario = 'ON',
    Quebec = 'QC',
    Nova_Scotia = 'NC',
    British_Columbia = 'BC'
}
// Link: https://en.wikipedia.org/wiki/Provinces_and_territories_of_Canada

console.log(Provinces.Ontario); // ON
console.log(Provinces.British_Columbia); // BC

// Functions:
/*
Again, TSC can deduct (infer) the return type of a function
*/
// TSC: function takeCare(name: string): void
function takeCare(name: string) {
    console.log(`takeCare ${name}!`);
}

// another example:
// TSC: function getGrossPay(hours: number, payRate: number): number
function getGrossPay(hours: number, payRate: number) {
    return hours * payRate;
}

/*
Consider the following function "getAverage()"
TSC Error for using two parameters 
without specifying the data type:
"Parameter 'num1' implicitly has an 'any' type"

To avoid this error,
we can activate the property "noImplicitAny"
in the tsconfig and set it to true:
"noImplicitAny": true,

or it's better to give them a type as well
also specifying the returned type of the function

So we should specify:
- for clarity and avoid any confusion!
- TSC will warn us if we forget to return the correct data type
*/

// TSC: function getAverage(num1: number, num2: number): number
function getAverage(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}

console.log(getAverage(90, 92));


function sayHi(name: string): void {
    console.log(`Hi ${name}!`);
}

sayHi("Tommy");

function output(any: string | number): void {
    /*
    We can use the "typeof" operator with an === (strict equality) in JavaScript 
    to check the type of a variable:
    */
    if (typeof (any) === "number") {
        console.log(`Your number is : ${any}`);
    } else {
        console.log(`Your text is : ${any}`);
    }
}

output("Test");
output(90.23);
output(100);