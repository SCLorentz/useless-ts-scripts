// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative method?

const calc = {
    '+': (op: number[]) => op.reduce((x, y) => x + y),
    '-': (op: number[]) => op.reduce((x, y) => x - y),
    '*': (op: number[]) => op.reduce(function m(x, y): number {
      if (y == 0) return 0;
      if (y < 0) return -m(x, -y);
      //
      return x + m(x, calc['-']([y, 1]))
    }),
    '/': (op: number[]) => op.reduce(function d(x, y): number {
      if (x == 0 || x < y || y == 0) return 0;
      if (y < 0) return -d(x, -y);
      //
      return 1 + d(calc['-']([x, y]), y)
    })
};

const som = calc['+']([1, 2, 3, 4]),
    mult = calc['*']([5, 2]),
    div = calc['/']([60, 2, 3]),
    negative = calc['*']([10, -1]);

console.log(som)
console.log(mult)
console.log(div)
console.log(negative)
