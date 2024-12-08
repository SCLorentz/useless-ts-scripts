// deno-lint-ignore-file no-constant-condition
/*declare global
{
    interface Boolean
    {
        invert(): boolean
        toString(): string
    }
}

Boolean.prototype.invert = function(): boolean
{
    return !this
}

Boolean.prototype.toString = function(): string
{
    return this ? "true" : "false"
}

T: { while(true.invert().toString() == "false")
{
    console.log("hello world!")
    break T
}}*/

console.log`${1 + 1}wtf`

// l -> (![] + [])[!+[] + !+[]]
// i --> ([![]]+[][[]])[+!+[]+[+[]]]
// n --> ([![]]+[][[]])[+!-[]+[!-![] -![]]]
// e --> ([![]]+[][[]])[+!+[]+[!-![] + !+[]]]

void async function main<T extends string>(): Promise<void & undefined>
{
    let _x: T = "bruh" as const;
    F: {while (false)
    {
        if (_x === "bruh")
        {
            console.log("hello world!")
            _x = "other"
            break F
        }
        else if (_x !== "bruh")
        {
            const get_true_value = (): Promise<string> => new Promise((resolve, reject) => !false ? resolve("bruh") : reject("not bruh"))
            _x = await get_true_value().catch((e) => console.log(e));
            continue
        }
    }}
}