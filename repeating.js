// Repeating Concept
// Loops

// for (initial value; stop condition; value behavior)

let limit = 10000
let sum = 0
let mathSum = limit * (limit + 1) / 2
console.log("Math Sum =", mathSum);

for (let i=1; i <= limit; i++) {    
    sum += i 
    // sum = sum + i
}
console.log("Sum from 1-100 =", sum)
