// Another Example of "Generics" with Classes [as with Java :-)]
// Link: https://github.com/anmarjarjees/java-extra/tree/main/src/p04_generics
/*
Let's see the advantage of generics with classes in this very simple demo :-)

Examine the three following classes:
- All have the same logic and same property and method
- But each is used for different data type:
> number
> string
> boolean
*/

class OutputNumber {
    private theVar: number;

    constructor(theVar: number) {
        this.theVar = theVar;
    }

    printVar(): void {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
} // class OutputNumber

class OutputString {
    private theVar: string;

    constructor(theVar: string) {
        this.theVar = theVar;
    }

    printVar(): void {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
} // class OutputString

class OutputBool {
    private theVar: boolean;

    constructor(theVar: boolean) {
        this.theVar = theVar;
    }

    printVar(): void {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
} // class OutputString

// Main Script:
// calling the 3 classes:
const var1 = new OutputString("TypeScript");
const var2 = new OutputNumber(100);
const var3 = new OutputBool(true);
const var4 = new OutputBool(false);

var1.printVar();
var2.printVar();
var3.printVar();
var4.printVar();

/* 
Instead of creating 3 different classes for each data type!
We can use "generics":
Adding the type parameter: <>
 * we can make it general by using the data type "T" for data "T"ype
 * So "T" represent the type of any variable/value that our class "Output"
 * is going to print/output
 */
class Output<T> {
    /*
     * Instead of using a fixed data type like int, double,...
     * we can make it general by using the data type "T" for data "T"ype
     */
    private theVar: T;

    // Passing a value of type "T" also
    constructor(theVar: T) {
        this.theVar = theVar;
    }

    printVar(): void {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
} // end class 

// Main Script:
// calling the generic class:
const genVar1 = new Output("TypeScript");
const genVar2 = new Output(100);
const genVar3 = new Output(true);
const genVar4 = new Output(false);

console.log("Using the Generic Class:");
genVar1.printVar();
genVar2.printVar();
genVar3.printVar();
genVar4.printVar();

// or just declaring a variable with initialing it:
/*
To recap we cannot declare a variable with the keyword "const"
without initializing its value
*/
// const genVar5: Output<number>;
/*
Error: 'const' declarations must be initialized.
*/

let genVar5: Output<number>;
let genVar6: Output<string>;
let genVar7: Output<boolean>;

// the following code line [Error]:
// genVar7 = new Output(100);
/*
Type 'Output<number>' is not assignable to type 'Output<boolean>'.
Type 'number' is not assignable to type 'boolean'
*/