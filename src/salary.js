const readlineSync = require("readline-sync");

const four01kContribution = 0.93;
const federalIncome = 0.157;
const stateIncome = 0.0447;
const socialSecurity = 0.062;
const medicare = 0.0145;

const annualSalary = parseFloat(readlineSync.question("\nAnnual salary: "));

const salaryAfter401k= parseFloat(annualSalary * four01kContribution);
const annualSalaryAfterDeductions = salaryAfter401k * ()
