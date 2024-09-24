// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative method?

const calc = {
    '+': (op: number[]) => op.reduce((x, y) => x + y),
    '-': (op: number[]) => op.reduce((x, y) => x - y),
    '*': (op: number[]) => op.reduce(function m(x, y): number {
      if (y < 0) return -m(x, -y);
      //
      return (y == 0) ? 0 : x + m(x, calc['-']([y,1]))
    }),
    '/': (op: number[]) => op.reduce(function d(x, y): number {
      if (y < 0) return -d(x, -y);
      //
      return (x == 0 || x < y || y == 0) ? 0 : calc['+']([1,d(calc['-']([x,y]), y)])
    })
};

const results = [
    calc['+']([1,2,3,4]),    // soma
    calc['*']([5,2]),        // multiplicação
    calc['/']([60,2,3]),     // divisão
    calc['*']([10, -1])      // negative result
]

results.forEach(e => console.log(e))
