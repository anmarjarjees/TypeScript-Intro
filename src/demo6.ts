// Generics:
/*
In C# and Java, we can create reusable components by using "generics", 
being able to create a component that can work over a variety of types rather than a single one. 
Link: https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content
*/


// Examples about why we need "generics":

/*
Example#1:
Creating a function that can accept any argument of any data type: string or number
and return back whatever is passed in:
*/

// now this function accepts "string" type only!
function getStrVar(arg: string): string {
  return arg;
}

function getNumVar(arg: number): number {
  return arg;
}

// Yes, we could use any:
function getAnyVar(arg: any): any {
  return arg;
}

// Notice the other way of creating this function:
const getAnyVarAgain = (arg: any): any => {
  return arg;
}


/*
According to TS documents:
"Using "any" function will accept any all types for the type of arg, 
we actually are losing the information about what that type was when the function returns. 
If we passed in a number, the only information we have is that any type could be returned."
Link: https://www.typescriptlang.org/docs/handbook/2/generics.html#hello-world-of-generics

In other words, we can pass a number but we return a string!

We use a "Type" parameter => <Type> to refer to any type
By convention as with "Java", the "Type" parameter in TypeScript is written in Capital T => "T"
But it could be any name or title => "T" represent the type 
In some online TS tutorial, they are using <T> "T" to represent the "type" as we do in Java
So the function below is "generic" for a range of types we pass to this function.

Unlike using any, it's also just as precise (i.e., it doesn't lose any information) as the first  function "getAnyVar" that used numbers for the argument and return type.

This "Type" allows us to capture the type the user provides (e.g. number)

Notice the following:
*********************
We define the generic type parameter right before the parameter list ()
*/
function getVar<Type>(arg: Type): Type {
  return arg;
}

/*
Two ways to call our generic function 
1. Pass all of the arguments, including the type argument, to the function.
2. (Most common), using type argument inference, the compiler will set the value of Type for us automatically based on the type of the argument we pass in.
*/

// First Way of Calling, examples:
let myVar1 = getVar<string>("Learning about Generics");
let myVar2 = getVar<number>(100);
console.log("myVar1", myVar1);
console.log("myVar2", myVar2);

// Second Way of Calling, examples:
let myVar3 = getVar("Generics is a good subject");
let myVar4 = getVar(200);
console.log("myVar3", myVar3);
console.log("myVar4", myVar4);

/*
In the second way, no need to explicitly pass the type in the angle brackets (<>),
The compiler can identify the type based on the passing value strings or number and set Type to its type. 

A note from TS Docs:
"While type argument inference can be a helpful tool to keep code shorter and more readable, you may need to explicitly pass in the type arguments as we did in the previous example when the compiler fails to infer the type, as may happen in more complex examples"
*/


/*
Another example of using "Generics" with Functions:

Let's use our previous function "cloneEmpObj":

To recap, this function:n 
- Takes any object of type "EmployeeInterface"
- Clones it and returns another copy of that object 

Notice that we still have access to the "EmployeeInterface"
was declared in a separate file but still inside the same folder:

Notice the following:
> The body (code) of this function doesn't have specific statements for "EmployeeInterface",
just using the method .assign() of "Object" to clone any object
> To make this function more usable, we can use generics,
so we can use it with more different data types other than "EmployeeInterface"
*/

// Below is the function from our previous code:
/*
function cloneEmpObj(sourceEmpObj: EmployeeInterface) : EmployeeInterface {
  return Object.assign({}, sourceEmpObj);
}
*/

// Converting the same function to accept a generic type parameter:
/*
1. Adding the generic type parameter <T> before the parameter list ()
2. Using the generic type "T" to replace any other type in function definition (signature)
TSC will use the same data type as the input parameter and the returned value
*/
function cloneObj<T>(sourceObj: T): T {
  return Object.assign({}, sourceObj);
}

// Put our function "cloneObj" into an action :-)
// Declaring a simple quick literal object:
const winterSemester = {
  program: 'CMPG',
  shells: 12,
  totalWeeks: 15,
  lectureWeeks: 14,
  readingWeek: 1,
  startDate: Date.now(),
  endDate: Date.now()
}

// Calling the function "cloneObj" to clone "winterSemester":
const winterSemesterCopy = cloneObj(winterSemester);


// Example#3:
/*
Creating another function (arrow function):
- accepts any data type
- returns a bool value (True/False)

This kind of coding is useful for utilities functions,
like check if the passing argument is:
- a of type "object" 
- or "primitive" data type:

To recap JS data types:
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object: object, array, date

Link: https://www.w3schools.com/js/js_datatypes.asp
*/

const isObj = <Type>(arg: Type): boolean => {
  /*
  Object in JS can be object, array, or date
  We can customize it to return only "object" which is an instance of a class
  excluding "array" 
  (In JavaScript, arrays aren't primitives! Array objects have properties and method
  Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

  excluding "null" value because type of null => returns an object
  Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values

  using the static method "isArray()"
  Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  */

  console.log(`\nType of the value  [${arg}] is ${typeof arg}`);

  // returning a logical condition:
  // If all true: T && T && T => return true
  // if one condition is false => return false
  return ((typeof arg === 'object' && !Array.isArray(arg)) && arg !== null)
}

// calling the function using the MDN examples:

// Null type
// The Null type is inhabited by exactly one value: null
console.log("null: ", isObj(null));

// Undefined type
// The Undefined type is inhabited by exactly one value: undefined
console.log("undefined: ", isObj(undefined));

// Boolean type
// The Boolean type represents a logical entity and is inhabited by two values: true and false
console.log("true: ", isObj(true));
console.log("false: ", isObj(false));

// BigInt values 
// represent numeric values which are too large to be represented by the number primitive
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
/*
Number.MAX_SAFE_INTEGER
The Number.MAX_SAFE_INTEGER static data property 
represents the maximum safe integer in JavaScript (253 – 1)
Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
*/
console.log("Number.MAX_SAFE_INTEGER: ", isObj(Number.MAX_SAFE_INTEGER));

// Number
console.log("1234567890: ", isObj(1234567890));

// String
// The String object is used to represent and manipulate a sequence of characters
console.log("TypeScript:", isObj("TypeScript"));

const courseName = "JS Frameworks";
console.log("courseName:", isObj("courseName"));

const program = new String("CMPG"); // with new keyword => object of a string
console.log("program:", isObj(program));

// Arrays:
const examList: number[] = [90, 92, 88, 91];
console.log("examList:", isObj(examList));

// Tuple:
const instructor: [number, string, string, boolean] = [10304, 'Alex Chow', 'CMPG', true];
console.log("instructor:", isObj(instructor));

// Literal Object
const myLiteralObj: {
  title: string,
  type: string,
  version: number
} = {
  title: "TypeScript",
  type: "Programming Language",
  version: 5.3
}
console.log("myLiteralObj:", isObj(myLiteralObj));

/*
Example#2:
A client need to a method for removing items from a list "array"
this list/array may contain numbers or strings
and getting (receiving) the new array after removing that item

Creating a function that can accept array of 
If we start with a simplified idea, 
assuming that our client needs to remove items from a list of numbers (like ids numeric value)
our function can be like this:
*/

/*
function getNewArray(existArray: number[]): number[] {
}
*/