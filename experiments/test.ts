// deno-lint-ignore-file no-unused-vars no-empty-interface ban-unused-ignore
// Anonymous functions ------------------------------------------------------

void function main(): void
{
    console.log("hello world");
}()

void function(): void
{
    console.log("something!");
}

// Decorators ---------------------------------------------------------------

function logged(constructor: { name: string; prototype: object; })
{
    constructor.prototype.log = function(): void
    {
        console.log(this);
    }
}

declare interface BugReport
{
    log(): void
}

@logged
class BugReport
{
    type = "report";
    constructor(public title: string) {}
}

// Teste o decorator
const bug = new BugReport("test") as BugReport & { log: () => void };
bug.log();

// Abstract classes ---------------------------------------------------------

abstract class Shape
{
    constructor(public name: string) {}
}

class Circle extends Shape
{
    constructor(name: string, public radius: number)
    {
        super(name);
    }

}

const circle = new Circle("Short Circle", 0.5);
console.log(circle)

// Type guard ---------------------------------------------------------------

type Check<T> = T extends string ? string : null;

const a: Check<string> = "string";
console.log(a);

const b: Check<number> = null;
console.log(b);

// -- Type guard with function ---------------------------------------------

function identity<T>(arg: T): T
{
    return arg;
}

console.log(identity<string>("hello"));

// Readonly values in objects -----------------------------------------------

type Readonly<T> = { readonly [P in keyof T]: T[P] };

// in dreamberd this would be something like this: `const const c = { a: 1 };`
const c: Readonly<{ a: number }> = { a: 1 };
const d: { a: number } = { a: 1 };

c.a = 2;    // error
d.a = 2;    // ok

// Combined types -----------------------------------------------------------

type Combined = { a: number } & { b: string };

const e: Combined = { a: 1, b: "hello" };

e.a = 2;
e.b = "world";

// Constant types -----------------------------------------------------------

type ConstString = "hello" | "world";

let x: ConstString = "hello" as const;

x = "world";    // ok
x = "hello";    // ok
x = "other";    // error (this doesn't affect the result when executed)

// Indexed Types ------------------------------------------------------------

type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];

type PersonKeys = keyof Person; // "age" | "name" | "alive"

const age: Age = 1;
const name: PersonKeys = "name";