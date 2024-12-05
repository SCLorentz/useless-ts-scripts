declare global
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
}}