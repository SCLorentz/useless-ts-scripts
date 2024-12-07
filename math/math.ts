// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative method?

const calc = {
  // soma
  '+': (op: number[]) => op.reduce((x, y) => x + y),
  // subtração
  '-': (op: number[]) => op.reduce((x, y) => x - y),
  // multiplicação
  '*': (op: number[]) => op.reduce(function m(x, y): number {
    //
    if (y < 0) return -m(x, -y);
    //
    return (y == 0) ? 0 : x + m(x, calc['-']([y,1]))
  }),
  // divisão
  '/': (op: number[]) => op.reduce(function d(x, y): number {
    //
    if (y < 0) return -d(x, -y);
    if (x == y) return 1
    //
    return (x == 0|| x < y || y == 0) ? 0 : calc['+']([1,d(calc['-']([x,y]), y)])
  })
};

const results = [
  calc['+']([1,2,3,4]),    // sum
  //
  calc['*']([5,2]),        // multiplication
  calc['*']([10, -1]),     // negative result
  //
  calc['/']([60,2,3]),     // division
  calc['/']([40, 40]),     // division by itself is always 1
]

results.forEach(e => console.log(e))
