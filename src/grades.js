const readlineSync = require("readline-sync");

const homeworkPercentage = 0.15;
const quizPercentage = 0.35;
const testPercentage = 0.5;


console.log("\nEnter three homework grades. ");

let homeworkTotal = 0;
homeworkTotal += parseFloat(readlineSync.question(""));
homeworkTotal += parseFloat(readlineSync.question(""));
homeworkTotal += parseFloat(readlineSync.question(""));

console.log("\nEnter three quiz grades. ");

let quizTotal = 0;
quizTotal += parseFloat(readlineSync.question(""));
quizTotal += parseFloat(readlineSync.question(""));
quizTotal += parseFloat(readlineSync.question(""));

console.log("\nEnter three test grades. ");

let testTotal = 0;
testTotal += parseFloat(readlineSync.question(""));
testTotal += parseFloat(readlineSync.question(""));
testTotal += parseFloat(readlineSync.question(""));

const homeworkAverage = homeworkTotal/3;
const quizAverage = quizTotal/3;
const testAverage = testTotal/3;

let gradeOverall = (homeworkPercentage * homeworkAverage) +  (quizPercentage * quizAverage) + (testPercentage * testAverage);
gradeOverall = gradeOverall.toFixed(2);

console.log("\nYour marking period grade is " + gradeOverall + "%.");
