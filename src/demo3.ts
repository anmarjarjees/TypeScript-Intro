// Classes
class Student {
    /*
    Class Properties (Class fields):
    Must be initialized:
    - either in the declaration
    - or in the constructor
    */

    /*
    TypeScript Access Modifiers:
    - public (by default) 
    - private
    - protected
    */
    // Class Members (properties and methods) are "public" by default
    // check this property line:
    // public college: string;
    /*
    Error: 
    Property 'college' has no initializer 
    and is not definitely assigned in the constructor
    */
    public college: string = "ILAC";

    /*
    NOTE:
    If we don't want to initialize a class field,
    we have two options:
    1- Add "undefined" as an alternative data type
    2- Add definite assignment assertion
    */

    // Option#1: Adding "undefined" as an alternative data type:
    public address: string | undefined;

    // Option#2: Adding a definite assignment assertion "!":
    public phone!: string;

    // Private:
    // Private properties: Using the keyword "private"
    // Not as we did in ES6 by adding the "#" symbol
    private id: number;
    /*
    making a property "private",
    tsc assumes that this property value will be used within the class,
    so with unused property, we will have this warning:
    
    "'id' is declared but its value is never read.""
    */

    private firstName: string;
    private lastName: string;

    // Protected:
    // class member can accessed within its class or the sub-class that extended from this class
    /*
    Notice that based on the rule for initializing the class fields,
    we also have to do the same with "protected"
    By explicitly assigning a value to this protected field:
    */
    protected email: string = "student_name@studyatilac.com";

    constructor(id: number, fName: string, lName: string) {
        /*
        Wrong Code Below
        TSC will consider both Left-Hand side and Right-Hand side as "parameters"!
        (parameter) id: number
        */
        // id = id;

        // Using the keyword "this" is always mandatory in JS:
        this.id = id;
        this.firstName = fName;
        this.lastName = lName;
    }

    // Class Methods: functions inside a class (without "function" keyword)

    // public method:
    public printFullName() {
        console.log("Full Name: " + this.firstName + " " + this.lastName)
    }
} // class

// Main Script:
// const st1 = new Student();
// As with Java => Error: Expected 3 arguments, but got 0.

const st1 = new Student(123, "Alex", "Chow");
// Using single quote :-)
const st2 = new Student(456, 'Sam', 'Simpson');


// Check the code below:
// st1.id=100;
/*
Error: Property 'id' is private and only accessible within class 'Student'.
*/

st1.printFullName();
st2.printFullName();