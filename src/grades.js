const readlineSync = require("readline-sync");

const homeworkPercentage = 0.15;
const quizPercentage = 0.35;
const testPercentage = 0.5;


console.log("Enter three homework grades. ");
const homeworkGrade1 = readlineSync.question("");
const homeworkGrade2 = readlineSync.question("");
const homeworkGrade3 = readlineSync.question("");


console.log("Enter three quiz grades. ");
const quizGrade1 = readlineSync.question("");
const quizGrade2 = readlineSync.question("");
const quizGrade3 = readlineSync.question("");


console.log("Enter three test grades. ");
const testGrade1 = readlineSync.question("");
const testGrade2 = readlineSync.question("");
const testGrade3 = readlineSync.question("");

const homeworkGradeOverall = (homeworkGrade1 + homeworkGrade2 + homeworkGrade3)/3;
const quizGradeOverall = (quizGrade1 + quizGrade2 + quizGrade3)/3;
const testGradeOverall = (testGrade1 + testGrade2 + testGrade3)/3;
const gradeOverall = (homeworkPercentage * homeworkGradeOverall) + (quizPercentage * quizGradeOverall) + (testPercentage * testGradeOverall);

console.log("Your marking period grade is " + gradeOverall + "%.");
