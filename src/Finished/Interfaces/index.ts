interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

/**
 *
 * @interface ReadonlyStringArray
 */
interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let arr_b: ReadonlyStringArray = ['Alice', 'Bob'];
arr_b[2] = 'Mallory'; // error!

export {};
