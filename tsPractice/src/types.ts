let foo: string = 'hello';
let bar: boolean = true;

console.log(foo);
console.log(bar);

function multiply(x: number, y: number): number {
  return x * y;
}

const sum = (x: number, y: number): number => x + y;

console.log(sum(3, 3));
console.log(multiply(3, 3 ));

const welcome = ():void => console.log('welcome');
console.log(welcome());


const numArr: Array<number> = [1, 2, 3];
console.log(numArr);

enum Numbers {one, two, three}
let num: number = Numbers.three;
console.log(num);

enum Assign {zero = 0, one = 11, two = 22}
console.log(Assign.one);

let notSure: any = 'str';
notSure = 1;
notSure = true;
notSure = 3;
console.log(typeof notSure, notSure);

let str: string,
    n: number,
    boo: boolean;

console.log(typeof str, n, boo);

str = 'str';
n = 3;
boo = true;

console.log(typeof str, n, boo);

