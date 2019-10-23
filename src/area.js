const readlineSync = require("readline-sync");

const converstionFactorInMmSquared = 645.16;
<<<<<<< HEAD
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const areaInches = (width * length);
const areaMillimeters = areaInches * converstionFactorInMmSquared;
let area = areaMillimeters.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
=======
let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");
let areaInches = (width * length);
let areaMillimeters = areaInches * converstionFactorInMmSquared;
areaMillimeters = Number(area.Millimeters);
areaMillimeters = areaMillimeters.toFixed(2);
areaMillimeters = areaMillimeteres.toLocaleString();

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaMillimeters + " square millimeter(s).");

//commas still don't wor
>>>>>>> e52f517ad426d772deed09a34ffa11f300e26cb4
