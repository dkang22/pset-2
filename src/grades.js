const readlineSync = require("readline-sync");

const homeworkPercentage = 0.15;
const quizPercentage = 0.35;
const testPercentage = 0.5;


console.log("\nEnter three homework grades. ");
let homeworkGrade1 = readlineSync.question("");
let homeworkGrade2 = readlineSync.question("");
let homeworkGrade3 = readlineSync.question("");

homeworkGrade1 = parseFloat(homeworkGrade1);
homeworkGrade2 = parseFloat(homeworkGrade2);
homeworkGrade3 = parseFloat(homeworkGrade3);


console.log("\nEnter three quiz grades. ");
let quizGrade1 = readlineSync.question("");
let quizGrade2 = readlineSync.question("");
let quizGrade3 = readlineSync.question("");

quizGrade1 = parseFloat(quizGrade1);
quizGrade2 = parseFloat(quizGrade2);
quizGrade3 = parseFloat(quizGrade3);

console.log("\nEnter three test grades. ");
let testGrade1 = readlineSync.question("");
let testGrade2 = readlineSync.question("");
let testGrade3 = readlineSync.question("");

testGrade1 = parseFloat(testGrade1);
testGrade2 = parseFloat(testGrade2);
testGrade3 = parseFloat(testGrade3);

const homeworkAverage = (homeworkGrade1 + homeworkGrade2 + homeworkGrade3)/3;
const quizAverage = (quizGrade1 + quizGrade2 + quizGrade3)/3;
const testAverage = (testGrade1 + testGrade2 + testGrade3)/3;

let gradeOverall = (homeworkPercentage * homeworkAverage) +  (quizPercentage * quizAverage) + (testPercentage * testAverage);
gradeOverall = gradeOverall.toFixed(2);

console.log("\nYour marking period grade is " + gradeOverall + "%.");
