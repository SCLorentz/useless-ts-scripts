// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative method?

class Calc {
  private op: number[];
  private type: string;
  //
  public constructor(type: string, op: number[]) {
    this.op = op;
    this.type = type;
  }
  public result() {
    return this.calc[this.type].bind(this)(this.op);
  }
  //
  /*private is_zero(x: number, y: number): number {
    return (y == 0 || x == 0) ? 0 : NaN
  }*/
  //
  public calc = {
    // soma
    '+': (op: number[]) => op.reduce((x, y) => x + y),
    // subtração
    '-': (op: number[]) => op.reduce((x, y) => x - y),
    // multiplicação
    '*': (op: number[]) => op.reduce(function mult(x, y): number {
      //
      if (x == 1) return y
      if (y < 0) return -mult(x, -y);
      //
      return (y == 0) ? 0 : x + mult(x, y - 1)
    }),
    // divisão
    '/': (op: number[]) => op.reduce(function div(x, y): number {
      //
      if (x == y) return 1
      if (y < 0) return -div(x, -y);
      //
      const is_zero = x == 0 || x < y || y == 0;
      //
      return is_zero ? 0 : 1 + div(x - y, y)
    })
  };
}

const results = [
  new Calc('+', [1, 2, 3, 4]).result(), // sum
  //
  new Calc('*', [5, 2]).result(),       // multiplication
  new Calc('*', [10, -1]).result(),     // negative result
  //
  new Calc('/', [60, 2, 3]).result(),   // division
  new Calc('/', [40, 40]).result(),     // division by itself is always 1
]

results.forEach(e => console.log(e))
