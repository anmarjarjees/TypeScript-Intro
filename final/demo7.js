"use strict";
class OutputNumber {
    constructor(theVar) {
        this.theVar = theVar;
    }
    printVar() {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
}
class OutputString {
    constructor(theVar) {
        this.theVar = theVar;
    }
    printVar() {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
}
class OutputBool {
    constructor(theVar) {
        this.theVar = theVar;
    }
    printVar() {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
}
const var1 = new OutputString("TypeScript");
const var2 = new OutputNumber(100);
const var3 = new OutputBool(true);
const var4 = new OutputBool(false);
var1.printVar();
var2.printVar();
var3.printVar();
var4.printVar();
class Output {
    constructor(theVar) {
        this.theVar = theVar;
    }
    printVar() {
        console.log("\nYour variable is: " + this.theVar);
        console.log("Data Type: " + typeof this.theVar);
    }
}
const genVar1 = new Output("TypeScript");
const genVar2 = new Output(100);
const genVar3 = new Output(true);
const genVar4 = new Output(false);
console.log("Using the Generic Class:");
genVar1.printVar();
genVar2.printVar();
genVar3.printVar();
genVar4.printVar();
let genVar5;
let genVar6;
let genVar7;
