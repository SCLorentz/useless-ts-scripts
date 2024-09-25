// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative and overcomplicated method?

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
    // equivalente à: (x - y / y) + 1
  }
  private mult(x: number, y: number): number {
    //
    if (x == 1) return y
    if (y < 0) return -this.mult(x, -y);
    //
    return this.is_zero(y, x) ? 0 : x + this.mult(x, this.calc['-']([y, 1]))
    // equivalente à: x + x * (y - 1)
  }
  //
  private sub(x: number, y: number): number {
    // create rules
    // 0 minus anything result in their oposite number
    // subtraction by 0 always result in no difference
    // every number plus their oposit will equals in 0
    new Map<boolean, number>().set(x == y, 0).set(x == 0, y).set(y == 0, -x).forEach((e, i) => e ? () => { return i } : null)
    //
    return this.calc['+']([x, this.calc['*']([y, -1])])
    // equivalente à: x - y (for now I can't use this.calc['-'] here without getting an error)
  }
  //
  private add(x: number, y: number): number {
    // for some reason I can't use a map here
    if (x == y) return this.calc['*']([y, 2])
    if (x == 0) return y
    if (y == 0) return x
    //
    /*if (y == 1) console.log(this.bin(x))
    if (x == 1) console.log(this.bin(y))*/
    //
    return x + y
  }
  // this should get the number in binary and use an algoritym to return the consecutive one, all in my notebook
  /*private bin(x: number): string {
    const binary = x.toString(2);
    //
    console.log("value: " + this.next(binary))
    //
    return binary
  }
  //
  private next(x: string): string {
    const first_char = x.charAt(0)
    // that means that the code must be broken
    if (first_char == "1") return "0" // here I need to copy the unmodifyed part of the binary, maybe if we subistitute the the beggining of the original content with the new one, we don't need to get the value again...
    // that means that the next char will be looked up
    if (first_char == "0") return "1" + this.next(x.slice(1))
  }*/
  //
  public calc = {
    // soma
    '+': (op: number[]) => op.reduce((x, y) => this.add(x, y)),
    // subtração
    '-': (op: number[]) => op.reduce((x, y) => this.sub(x, y)),
    // multiplicação
    '*': (op: number[]) => op.reduce((x, y) => this.mult(x, y)),
    // divisão
    '/': (op: number[]) => op.reduce((x, y) => this.div(x, y))
  };
}

const results = [
  new Calc('+').result([1, 2, 3, 4]), // sum
  new Calc('+').result([10, 10]),
  //
  new Calc('*').result([5, 2]),       // multiplication
  new Calc('*').result([10, -1]),     // negative result
  //
  new Calc('/').result([60, 2, 3]),   // division
  new Calc('/').result([40, 40]),     // division by itself is always 1
  //
  new Calc('-').result([20, 10]),
  //
  new Calc('+').result([10, 1])
]

results.forEach(e => console.log(e))

// yes! this is how it would look if I used the operators instead

/*const results_2 = [
  1 + 2 + 3 + 4,
  10 + 10,
  //
  5 * 2,
  10 * -1,
  //
  60 / 2 / 3,
  40 / 40,
  //
  20 - 10,
]

console.log('normal way:')
results_2.forEach(e => console.log(e))*/
