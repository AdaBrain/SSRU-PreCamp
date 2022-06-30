// Functions 
function javisSay(msg) {
    console.log("Javis:", msg)
}

javisSay("Hello, Ada")
javisSay("How are you?")
javisSay("Anything eles?")

function botSay(speaker, msg) {
    console.log(speaker, ":", msg)
}

botSay("Peter", "Hi, Ada")
botSay("Ada", "How are you, Pete?")
botSay("Peter", "I'm Great!")

// Arrow Function or Lambda Function
const add = (a, b) => a + b
console.log("3 + 2 =", add(3, 2))

const isEven = (num) => num % 2 === 0
const isEvenFull = (num) => {
    num = num * 2
    return num % 2 === 0
}
console.log("is 7 is an even:", isEven(7))


