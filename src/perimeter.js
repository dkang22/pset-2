const readlineSync = require("readline-sync");

const CONVERSION_IN_CM = 2.54;

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const perimeterInches = 2 * width + 2 * length;
let perimeterCentimeters = perimeterInches * CONVERSION_IN_CM;
perimeterCentimeters = perimeterCentimeters.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeterCentimeters + " centimeter(s).");
