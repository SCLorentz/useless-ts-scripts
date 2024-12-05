const a='a-z',v='aeiou',
c=new RegExp(`[^${v}]`,'g'),
t=(r=Math.random)=>c.test(a[r()*26|0])?v[r()*5|0]:a[r()*26|0],
cN=(s:number):string=> s>0 ? cN(s-1)+t() : '';

console.log(`${console.clear(), ""}generated: ${cN(Math.max(1,parseInt(Deno.args[0],10)||6))}`)

// 260 chars (686 less than ./name.old.ts)