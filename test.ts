void function main(): void
{
    console.log("hello world");
}()

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