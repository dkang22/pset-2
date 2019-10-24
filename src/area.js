const readlineSync = require("readline-sync");

const converstionFactorInMmSquared = 645.16;

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const areaInches = (width * length);
let areaMillimeters = areaInches * converstionFactorInMmSquared;
areaMillimeters = areaMillimeters.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaMillimeters + " square millimeter(s).");
