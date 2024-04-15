function greeting(): void {
    console.log("Hello world")
}

greeting()
greeting()
greeting()
greeting()

function greetUserByName(name: string, age: number): void {
    console.log("Hello "+ name)
}

greetUserByName(
    "Martin",
    35
)
