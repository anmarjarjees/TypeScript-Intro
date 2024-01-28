"use strict";
console.log("Hello TypeScript!");
let number = 5;
let value = 7;
console.log("Number: " + number);
console.log('Value: ' + value);
let num = 5;
let largeNum = 1111123455556666;
let college = "ILAC";
let isValid = true;
let var1Hover = 200;
let var2Hover = "JavaScript";
let x = 'TypeScript';
x = true;
x = 100;
let y;
let exams = [90, 92, 88];
let myArray = [1, true, 'Java'];
let student = [10304, 'Alex Chow', 'CMPG', true];
let classrooms;
classrooms = [
    [312, "JS Frameworks"],
    [313, "PHP and MySQL"],
    [110, "ASP.NET"],
    [205, "Java"],
];
let classroom;
classroom = 'C312';
let passKey = 7123;
let keys = 88;
keys = 61;
keys = 73;
function printDevInfo(name, title) {
    console.log(`${name} is a ${title} developer`);
}
printDevInfo("Alex", "Front-End");
printDevInfo("Dave", "Back-End");
printDevInfo("Sarah", "Full-Stack");
var Languages;
(function (Languages) {
    Languages[Languages["Java"] = 0] = "Java";
    Languages[Languages["PHP"] = 1] = "PHP";
    Languages[Languages["Python"] = 2] = "Python";
    Languages[Languages["JavaScript"] = 3] = "JavaScript";
    Languages[Languages["Csharp"] = 4] = "Csharp";
    Languages[Languages["TypeScript"] = 5] = "TypeScript";
})(Languages || (Languages = {}));
console.log(Languages.Java);
console.log(Languages.TypeScript);
const currentLanguageIndex = Languages.TypeScript;
console.log(`We are learning ${Languages[currentLanguageIndex]} now`);
var Days;
(function (Days) {
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
})(Days || (Days = {}));
console.log(Days.Mon);
console.log(Days.Fri);
var Provinces;
(function (Provinces) {
    Provinces["Ontario"] = "ON";
    Provinces["Quebec"] = "QC";
    Provinces["Nova_Scotia"] = "NC";
    Provinces["British_Columbia"] = "BC";
})(Provinces || (Provinces = {}));
console.log(Provinces.Ontario);
console.log(Provinces.British_Columbia);
function takeCare(name) {
    console.log(`takeCare ${name}!`);
}
function getGrossPay(hours, payRate) {
    return hours * payRate;
}
function getAverage(num1, num2) {
    return (num1 + num2) / 2;
}
console.log(getAverage(90, 92));
function sayHi(name) {
    console.log(`Hi ${name}!`);
}
sayHi("Tommy");
function output(any) {
    if (typeof (any) === "number") {
        console.log(`Your number is : ${any}`);
    }
    else {
        console.log(`Your text is : ${any}`);
    }
}
output("Test");
output(90.23);
output(100);
