"use strict";
function getStrVar(arg) {
    return arg;
}
function getNumVar(arg) {
    return arg;
}
function getAnyVar(arg) {
    return arg;
}
const getAnyVarAgain = (arg) => {
    return arg;
};
function getVar(arg) {
    return arg;
}
let myVar1 = getVar("Learning about Generics");
let myVar2 = getVar(100);
console.log("myVar1", myVar1);
console.log("myVar2", myVar2);
let myVar3 = getVar("Generics is a good subject");
let myVar4 = getVar(200);
console.log("myVar3", myVar3);
console.log("myVar4", myVar4);
function cloneObj(sourceObj) {
    return Object.assign({}, sourceObj);
}
const winterSemester = {
    program: 'CMPG',
    shells: 12,
    totalWeeks: 15,
    lectureWeeks: 14,
    readingWeek: 1,
    startDate: Date.now(),
    endDate: Date.now()
};
const winterSemesterCopy = cloneObj(winterSemester);
const isObj = (arg) => {
    console.log(`\nType of the value  [${arg}] is ${typeof arg}`);
    return ((typeof arg === 'object' && !Array.isArray(arg)) && arg !== null);
};
console.log("null: ", isObj(null));
console.log("undefined: ", isObj(undefined));
console.log("true: ", isObj(true));
console.log("false: ", isObj(false));
console.log("Number.MAX_SAFE_INTEGER: ", isObj(Number.MAX_SAFE_INTEGER));
console.log("1234567890: ", isObj(1234567890));
console.log("TypeScript:", isObj("TypeScript"));
const courseName = "JS Frameworks";
console.log("courseName:", isObj("courseName"));
const program = new String("CMPG");
console.log("program:", isObj(program));
const examList = [90, 92, 88, 91];
console.log("examList:", isObj(examList));
const instructor = [10304, 'Alex Chow', 'CMPG', true];
console.log("instructor:", isObj(instructor));
const myLiteralObj = {
    title: "TypeScript",
    type: "Programming Language",
    version: 5.3
};
console.log("myLiteralObj:", isObj(myLiteralObj));
