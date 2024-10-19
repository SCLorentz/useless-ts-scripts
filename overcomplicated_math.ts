// this is a script that can be used for math
// If you can easily use the math operators in high level languages, like ts... Why not use an alternative and overcomplicated method?

class Calc {
  private op!: number[];
  private operator: string;

  public constructor(operator: string)
  {
    this.operator = operator;
  }

  public result(op: number[]): number
  {
    this.op = op;
    //
    return this.calc[this.operator].bind(this)(this.op);
  }

  private static div(x: number, y: number): number
  {
    const val = new Calc('/');
    new Map<boolean, number>().set(x == y, 1).set((x == 0 || y == 0), 0)
      .forEach((e, i) => e ? () => { return i } : null)

    if (y < 0) return -val.result([x, -y])
    //
    return x < y ? 0 : (val.result([x - y, y])) + 1
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

  /*binary conversion here*/
  
  public calc = {
    // soma
    '+': (op: number[]): number => op.reduce((x, y) => Calc.add(x, y)),
    // subtração
    '-': (op: number[]): number => op.reduce((x, y) => Calc.sub(x, y)),
    // multiplicação
    '*': (op: number[]): number => op.reduce((x, y) => Calc.mult(x, y)),
    // divisão
    '/': (op: number[]): number => op.reduce((x, y) => Calc.div(x, y))
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

///////////////////////////////////////////////////////////////////////////////////

interface String
{
  invert(): string;
  next(): string;
}

interface Number
{
  increase(bits: number): number;
}

String.prototype.invert = function(): string
{
  return this.split('').reverse().join('');
}

String.prototype.next = function(): string
{
  return this.charAt(0) == "0" ? `1${this.substring(1)}` : `0${this.slice(1).next()}`
}

Number.prototype.increase = function(bits: number, y = this.toString(2)): number
{
  return parseInt(
    (`${Array(bits - y.length + 1).join("0")}${y}`).invert().next().invert(),
    2
  )
}

for (let i = 0; i < 100; i++)
{
  console.log(`${i} -> ${i.increase(7)}`)
}

// x.increase() does the same this that 'x++' or 'x += 1' or 'x = x + 1' does
