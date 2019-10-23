const readlineSync = require("readline-sync");

const converstionFactorInCm = 2.54;
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const perimeterInches = 2 * width + 2 * length;
const perimeterCentimeters = perimeterInches * converstionFactorInCm;
const perimeter = perimeterCentimeters.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).");
