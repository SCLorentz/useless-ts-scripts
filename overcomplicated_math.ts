// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative and overcomplicated method?

class Calc {
  private op: number[];
  private type: string;

  public constructor(type: string)
  {
    this.type = type;
  }

  public result(op: number[])
  {
    this.op = op;
    //
    return this.calc[this.type].bind(this)(this.op);
  }

  private static div(x: number, y: number): number
  {
    new Map<boolean, number>().set(x == y, 1).set((x == 0 || y == 0), 0)
      .forEach((e, i) => e ? () => { return i } : null)

    // transform this in a hashmap
    let x_value = x - y,
        y_value = y,
        sum = 0,
        oposite = 1;

    if (x < 0) {
        x_value = x,
        y_value = -y,
        sum = 1,
        oposite = -1
    }

    // Todo: add support for fractional values
    return x < y ? 0 : (oposite * new Calc('/').result([x_value, y_value]) + sum)
    // equivalente à: (x - y / y) + 1
  }

  private static mult(x: number, y: number): number
  {
    const val = new Calc('*');

    new Map<boolean, number>().set(x == 1, y)
      .forEach((e, i) => e ? () => { return i } : null)

    if (y < 0) return -val.result([x, -y]);
    //
    return (x == 0 || y == 0) ? 0 : x + val.result([x, y - 1])
    // equivalente à: x + x * (y - 1)
  }

  private static sub(x: number, y: number): number
  {
    new Map<boolean, number>().set(x == y, 0).set(x == 0, y).set(y == 0, -x)
      .forEach((e, i) => e ? () => { return i } : null)
    
    return new Calc('+').result([x, -y])
  }

  private static add(x: number, y: number): number
  {
    new Map<boolean, number>().set(x == 0, y).set(y == 0, x)
      .forEach((e, i) => e ? () => { return i } : null)

    /*if (y == 1) console.log(this.bin(x))
    if (x == 1) console.log(this.bin(y))*/
    //
    return x == y ? new Calc('*').result([y, 2]) : x + y
  }
  // this should get the number in binary and use an algoritym to return the consecutive one, all in my notebook
  /*private bin(x: number): string
  {
    const binary = x.toString(2);
    //
    console.log("value: " + this.next(binary))
    //
    return binary
  }
  
  private next(x: string): string
  {
    const first_char = x.charAt(0)
    // that means that the code must be broken
    if (first_char == "1") return "0" // here I need to copy the unmodifyed part of the binary, maybe if we subistitute the the beggining of the original content with the new one, we don't need to get the value again...
    // that means that the next char will be looked up
    if (first_char == "0") return "1" + this.next(x.slice(1))
  }*/
  
  public calc = {
    // soma
    '+': (op: number[]) => op.reduce((x, y) => Calc.add(x, y)),
    // subtração
    '-': (op: number[]) => op.reduce((x, y) => Calc.sub(x, y)),
    // multiplicação
    '*': (op: number[]) => op.reduce((x, y) => Calc.mult(x, y)),
    // divisão
    '/': (op: number[]) => op.reduce((x, y) => Calc.div(x, y))
  };
}

const mult = new Calc('*'),
  div = new Calc('/'),
  add = new Calc('+'),
  sub = new Calc('-')

const results = [
  add.result([1, 2, 3, 4]), // sum
  add.result([10, 10]),
  //
  mult.result([5, 2]),       // multiplication
  mult.result([10, -1]),     // negative result
  //
  div.result([60, 2, 3]),   // division
  div.result([40, 40]),     // division by itself is always 1
  //
  sub.result([20, 10]),
  //
  add.result([9, 1])
]

results.forEach(e => console.log(e))
