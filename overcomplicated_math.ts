// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative method?

class Calc {
  private op: number[];
  private type: string;
  //
  public constructor(type: string) {
    this.type = type;
  }
  //
  public result(op: number[]) {
    this.op = op;
    //
    return this.calc[this.type].bind(this)(this.op);
  }
  //
  private is_zero(x: number, y: number): boolean {
    return (y == 0 || x == 0) ? true : false
  }
  //
  private div(x: number, y: number): number {
    //
    if (x == y) return 1
    if (y < 0) return this.calc['*']([this.div(x, -y), -1]);
    //
    return this.is_zero(x, y) || x < y ? 0 : this.calc['+']([this.div(x - y, y), 1])
  }
  private mult(x: number, y: number): number {
    //
    if (x == 1) return y
    if (y < 0) return -this.mult(x, -y);
    //
    return (y == 0) ? 0 : x + this.mult(x, this.calc['-']([y, 1]))
  }
  //
  public calc = {
    // soma
    '+': (op: number[]) => op.reduce((x, y) => x + y),
    // subtração
    '-': (op: number[]) => op.reduce((x, y) => this.calc['+']([x, this.calc['*']([y, -1])])),
    // multiplicação
    '*': (op: number[]) => op.reduce((x, y) => this.mult(x, y)),
    // divisão
    '/': (op: number[]) => op.reduce((x, y) => this.div(x, y))
  };
}

const results = [
  new Calc('+').result([1, 2, 3, 4]), // sum
  //
  new Calc('*').result([5, 2]),       // multiplication
  new Calc('*').result([10, -1]),     // negative result
  //
  new Calc('/').result([60, 2, 3]),   // division
  new Calc('/').result([40, 40]),     // division by itself is always 1
  //
  new Calc('-').result([20, 10])
]

results.forEach(e => console.log(e))
