// let x =1;
// for (let j = 1; j< 5; j++) {
// for (let i = 1; i< 5; i++) {
//         x = x + i;
// }
// }
// console.log(x);

// let x = 0;
// console.log(x++);


// //POST - increment, decrement(runs after the statement is executed)
// //Pre - increment, decrement(runs before the statement is executed)

let x = 0;
console.log(++x); // Pre-increment: increments x before logging, so logs 1
console.log(x++); // Post-increment: logs x (which is 1) and then increments it to 2
console.log(x);   // Logs the current value of x, which is now 2
console.log(--x); // Pre-decrement: decrements x before logging, so logs 1
console.log(x--); // Post-decrement: logs x (which is 1) and then decrements it to 0