const readlineSync = require("readline-sync");

const converstionFactorInToMm = 25.4;

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const areaInches = (width * length);
let areaMillimeters = areaInches * Math.pow(converstionFactorInToMm, 2);
areaMillimeters = areaMillimeters.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaMillimeters + " square millimeter(s).");
