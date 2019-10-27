const readlineSync = require("readline-sync");

const HOMEWORK_WEIGHT = 0.15;
const QUIZ_WEIGHT = 0.35;
const TEST_WEIGHT = 0.5;


console.log("\nEnter three homework grades. ");

let homeworkTotal = 0;
homeworkTotal += Number(readlineSync.question(""));
homeworkTotal += Number(readlineSync.question(""));
homeworkTotal += Number(readlineSync.question(""));

console.log("\nEnter three quiz grades. ");

let quizTotal = 0;
quizTotal += Number(readlineSync.question(""));
quizTotal += Number(readlineSync.question(""));
quizTotal += Number(readlineSync.question(""));

console.log("\nEnter three test grades. ");

let testTotal = 0;
testTotal += Number(readlineSync.question(""));
testTotal += Number(readlineSync.question(""));
testTotal += Number(readlineSync.question(""));

const homeworkAverage = homeworkTotal/3;
const quizAverage = quizTotal/3;
const testAverage = testTotal/3;

let gradeOverall = (HOMEWORK_WEIGHT * homeworkAverage) +  (QUIZ_WEIGHT * quizAverage) + (TEST_WEIGHT * testAverage);
gradeOverall = gradeOverall.toFixed(2);

console.log("\nYour marking period grade is " + gradeOverall + "%.");
