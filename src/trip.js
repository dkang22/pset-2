const readlineSync = require("readline-sync");

const studentNum = parseInt(readlineSync.question("\nStudents: "));
const teacherNum = parseInt(readlineSync.question("Teachers: "));
const busCapacity = parseInt(readlineSync.question("Bus capacity: "));

const totalPeople = parseInt(studentNum + teacherNum);
const busNum = Math.ceil(totalPeople/busCapacity);
let passengersLastBus = parseFloat(totalPeople % busCapacity);
passengersLastBus = passengersLastBus.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 0 });


console.log("\n" + busNum + " bus(es) is (are) needed, with " + passengersLastBus + " passenger(s) on the last bus.");
