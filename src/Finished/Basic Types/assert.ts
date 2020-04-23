let someValue: any = 'this is a string';

// 尖括号法
let strLength_a: number = (<string>someValue).length;
let strLength_b: number = (<number>someValue).length;

// as法
let strLength_c: number = (someValue as string).length;
let strLength_d: number = (someValue as number).length;
export {};
