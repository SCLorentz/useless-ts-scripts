const calc = {
    '+': (op) => op.reduce((x, y) => x + y),
    '-': (op) => op.reduce((x, y) => x - y),
    '*': (op) => op.reduce(function m(x, y) {
      if (y == 0 || y == 0) return 0;
      if (y < 0) return -m(x, -y);
      return x + m(x, y - 1);
    }),
    '/': (op) => op.reduce(function d(x, y) {
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
