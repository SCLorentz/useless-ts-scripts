function greet(person: string): string;
function greet(persons: string[]): string[];
function greet(person: string | string[]): string | string[]
{
    return Array.isArray(person) ? person.map(name => `Hello, ${name}!`) : `Hello, ${person}!`;
}

console.log(greet("John"));
console.log(greet(["John", "Jane"]));

//

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

//

function applyOperation(x: number, y: number, operation: (a: number, b: number) => number): number
{
    return operation(x, y);
}

console.log(applyOperation(2, 3, (a, b) => a + b));
console.log(applyOperation(2, 3, (a, b) => a * b));

//

// deno-lint-ignore ban-types
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

function getFunctionProperties<T>(obj: T): FunctionProperties<T> {
    return obj as FunctionProperties<T>;
}

const fnProperties = getFunctionProperties({
    add: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b
});

console.log("function properties:", fnProperties.add(1, 2));