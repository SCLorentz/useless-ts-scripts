const calc = {
    '+': (op: Array<number>) => op.reduce((x, y) => x + y),
    '-': (op: Array<number>) => op.reduce((x, y) => x - y),
    '*': (op: Array<number>) => op.reduce(function m(x, y): number {
      if (y == 0 || y == 0) return 0;
      if (y < 0) return -m(x, -y);
      return x + m(x, y - 1);
    }),
    '/': (op: Array<number>) => op.reduce(function d(x, y): number {
      if (x == 0 || x < y || y == 0) return 0;
      if (y < 0) return -d(x, -y);
      return 1 + d(x - y, y);
    })
};

const som = calc['+']([1, 2, 3, 4]);
const mult = calc['*']([5, 2]);
const div = calc['/']([60, 2, 3]);
const negative = calc['*']([10,-1]);

console.log(som)
console.log(mult)
console.log(div)
console.log(negative)
