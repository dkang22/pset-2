const readlineSync = require("readline-sync");

const studentNum = Number(readlineSync.question("\nStudents: "));
const teacherNum = Number(readlineSync.question("Teachers: "));
const busCapacity = Number(readlineSync.question("Bus capacity: "));

const totalPeople = Number(studentNum + teacherNum);
const busNum = Math.ceil(totalPeople/busCapacity);
let passengersLastBus = Number(totalPeople % busCapacity);
passengersLastBus = passengersLastBus.toLocaleString("en", {minimumFractionDigits: 0, maximumFractionDigits: 0 });


console.log("\n" + busNum + " bus(es) is (are) needed, with " + passengersLastBus + " passenger(s) on the last bus.");
