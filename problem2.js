// Problem 2 : Fibonacci Sequence
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 
// f(n) = f(n-1) + f(n-2)
// Ex. f(2) = f(2-1) + f(2-2) = f(1) + f(0) = 1 + 1 = 2

let f0 = 1
let f1 = 1
console.log(f0, f1) 
for (let i=0; i<10; i++) {
    let fn = f0 + f1
    f0 = f1
    f1 = fn
    console.log(fn)
}
