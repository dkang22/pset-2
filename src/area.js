const readlineSync = require("readline-sync");

const converstionFactorInMmSquared = 645.16;
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const areaInches = (width * length);
const areaMillimeters = areaInches * converstionFactorInMmSquared;
let area = areaMillimeters.toFixed(2);
area = area.toLocaleString();

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");

//commas still don't work
