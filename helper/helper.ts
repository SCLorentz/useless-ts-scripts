import { print } from "./config.ts";

//==============================
print("Functions", "blue")
//==============================

function sum(args: number[]): number {
    return args.reduce((x, y) => x + y);
}

console.log(sum([1, 2, 3, 4]))

//== Use arrow functions here ==
print("Alternative:", "green")
print("with arrow function", "gray")
//==============================

const _sum = (...args: number[]) => args.reduce((x, y) => x + y);

console.log(_sum(1, 2, 3, 4))

//================================
print("function handeling", "blue")
//================================

function kind(arg: string | undefined): string {
    if (arg) {
        if (!isNaN(Number(arg))) {
            return "numerical";
        }
        if (arg.match(/^[a-zA-Z]+$/)) {
            return "alphabetical";
        }
        return "undefined";
    }
    return "undefined";
}

console.log(kind("a"));
console.log(kind("1"));
console.log(kind(undefined));

//==============================
print("Alternative:", "green")
print("with conditional operator", "gray")
//==============================

type Maybe<T> = T | undefined;

const _kind = (arg?: Maybe<string>): string => arg &&
(
    !isNaN(Number(arg)) && "numerical" ||
    arg.match(/^[a-zA-Z]+$/) && "alphabetical"
) ||  "undefined";

console.log(_kind("a"));
console.log(_kind("1"));
console.log(_kind(undefined));

//==============================
print("Classes", "blue")
//==============================

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}

const p = new Point(1, 2);
console.log(p.toString());

//==============================
print("Alternative:", "green")
print("better constructor", "gray")
//==============================

class _Point
{
    constructor(public x: number, public y: number) {}

    toString = (): string => `(${this.x}, ${this.y})`;
}

const _p = new _Point(1, 2);
console.log(_p.toString());

//==============================
print("Alternative:", "green")
print("with Interface", "gray")
//==============================

interface __Point
{
    toString(): string;
}

class __Point implements __Point
{
    constructor(public x: number, public y: number) {}
}

// In this case this isn't very useful, but can be used in other cases, and can prevent nested code
__Point.prototype.toString = function(): string
{
    return `(${this.x}, ${this.y})`;
};

const __p = new __Point(1, 2);
console.log(__p.toString());

//==============================
print("Switch", "blue")
//==============================

function verif(arg: string): string {
    switch (arg) {
        case "a":
            return "something";
        case "b":
            return "other thing";
        // other cases ...
        default:
            return "default";
    }
}

console.log(verif("a"));
console.log(verif("b"));
console.log(verif("c"));

//==============================
print("Alternative:", "green")
print("with map", "gray")
//==============================

const _verif = (arg: string): string => new Map<string, string>(
[
    ["a", "something"],
    ["b", "other thing"],
    // other cases ...
]).get(arg) || "default";

console.log(_verif("a"));
console.log(_verif("b"));
console.log(_verif("c"));