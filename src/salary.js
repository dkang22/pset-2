const readlineSync = require("readline-sync");

const FOUR_O_ONE_K_CONTRIBUTION = 0.93;
const FEDERAL_INCOME = 0.157;
const STATE_INCOME = 0.0447;
const SOCIAL_SECURITY = 0.062;
const MEDICARE = 0.0145;

const annualSalary = Number(readlineSync.question("\nAnnual salary: "));

const salaryAfter401k = Number(annualSalary * FOUR_O_ONE_K_CONTRIBUTION);
const annualSalaryAfterDeductions = Number(salaryAfter401k - (salaryAfter401k * (FEDERAL_INCOME + STATE_INCOME + SOCIAL_SECURITY + MEDICARE)));
let bimontlySalary = Number(annualSalaryAfterDeductions/24);
bimontlySalary = bimontlySalary.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });



console.log("\nYour take-home pay each check will be $" + bimontlySalary + ".");
