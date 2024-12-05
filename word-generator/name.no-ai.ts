const [c, v] = [['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'],['a','e','i','o','u']],
    a = v.concat(c),
    createName = (s: number, l?: string, ch: string = expectedType(l)): string => s <= 0 ? "" : createName(s - 1, ch) + ch,
    expectedType = (ch: string | undefined, rng = (v: number) => Math.floor(Math.random() * v)): string => c.includes(ch!) && v[rng(v.length)] || a[rng(a.length)];

console.log(`${console.clear(), ""}generated: ${createName(parseInt(Deno.args[0], 10) || 6)}`)

// 530 chars