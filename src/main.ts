// Basic Funktion in Tyoescript

function greeting(): void {
    console.log("Hello world")
}

// Aufrufen der Funktion:

greeting()
greeting()
greeting()
greeting()


//Elemente in einer Funktion übergeben
function greetUserByName(name: string, age: number): void {
    console.log("Hello "+ name + ", you are " + age + " old.")
}

// Werte den Variablen übergeben
greetUserByName(
    "Martin",
    35
)

// ARROW FUNCTIONS


const add = (a: number, b: number): number => {
    return a + b
}

console.log(add(5,6))

// Weitere Arrow Funktion
const greetUserByNameArrowFunction = (name: string, age: number): void => {
    console.log("Hello " + name + ",you are " + age + " old.")
}


// Funktion mit Default WErt
function myFunctionWithDefaultValue(name: string = "Martin"):void {
    console.log(name)
}

// ARRAY METHODS

const numbers: number[] = [1,2,3,4,5,6]

const doubledNumbers: number[] = numbers.map(((number: number) => number * 2))  // => ist ein implizierter return

console.log(doubledNumbers)
console.log(numbers)


// Filter
const evenNumbers: number[] = numbers.filter((number: number):boolean => number % 2 ===0)
console.log(evenNumbers)
