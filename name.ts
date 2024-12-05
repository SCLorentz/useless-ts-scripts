const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const vowel = ['a', 'e', 'i', 'o', 'u'];
const all = [...consonant, ...vowel];

function createName(size: number, last?: string): string
{
    const letter: string = expectedType(last);
    //
    if (size <= 0) return "";
    //
    return createName(size - 1, letter) + letter;
}

function expectedType(letter: string | undefined): string
{
    if (letter && consonant.includes(letter)) return vowel[Math.floor(Math.random() * vowel.length)];
    return all[Math.floor(Math.random() * all.length)];
}

declare global
{
    interface String
    {
        to_number(): number
    }
}

String.prototype.to_number = function(): number
{
    // @ts-ignore: this is a string
    return parseInt(this, 10);
}

const size: number = Deno.args[0]?.to_number() || 6;

console.clear();
console.log(`generated: ${createName(size)}`)