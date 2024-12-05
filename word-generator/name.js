const v='aeiou',c=new RegExp(`[^${v}]`,'g'),
t=(r=Math.random,f=String.fromCharCode)=>c.test(f(97+r()*26|0))?v[r()*5|0]:f(97+r()*26|0),
cN=s=>s>0&&cN(s-1)+t()||'';
console.log(`${console.clear(),""}generated: ${cN(Math.max(1,Number(Deno.args[0])||6))}`)

// 258 chars