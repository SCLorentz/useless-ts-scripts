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

function bin(x: number, bits: number): number
{
  const inversed_binary = (y = x.toString(2)) => {
    while (y.length < bits) y = `0${y}`; // use a recursive call here
    return y
  }

  const next = (x: string): string => {
    return x.charAt(0) == "0" ? `1${x.substring(1)}` : `0${next(x.slice(1))}`
  }

  const result = reverse_string(next(reverse_string(inversed_binary())));

  return parseInt(result, 2);
}

function reverse_string(value: string) {
  const split = value.split('');
  let inverse: string = "";

  split.length > 1 ? split.reverse().forEach(e => inverse += e) : inverse = value
  //
  return inverse
}

for (let i = 0; i < 100; i++) {
  console.log(`${i} -> ${bin(i, 7)}`)
}

// 07 --> 0111 - 1110
// 08 --> 1000 - 0001
// 09 --> 1001 - 1001
// 10 --> 1010 - 0101
// 11 --> 1011 - 1101

// 1 -> return 0 and continue to the next one
// 0 -> return 1, stop and merge with the remaining

// (11) 1101 --> A >> 1, so return 0 and continue
// 101 --> B >> 1, so return 0 and continue
// 01 --> C >> 0, so return 1 and merge with the unmodfied part
// (12) 0011

// 1101 -> 0
// 101 -> 0
// 01 -> 1 stop
