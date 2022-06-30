// Problem 1
// FizzBuzz Problem
// 1. print "Fizz" when input divisible by 3
// 2. print "Buzz" when input divisible by 5
// 3. print "FizzBuzz" when input divisible by 3 and 5

let input = 6
// && --> AND Operator
// % --> Modulo (mod) operator, divide for remainder
console.log("input =", input)

if (input % 3 === 0 && input % 5 === 0) {
    console.log("FizzBuzz")
} else if (input % 3 === 0) {
    console.log("Fizz")
} else if (input % 5 === 0) {
    console.log("Buzz")
} else {
    console.log("Input can't divides by 3 and 5: NoFizz NoBuzz")
}