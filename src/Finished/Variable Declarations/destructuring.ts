let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// swap variables
[first, second] = [second, first];

// 对象结构
let o = {
	a: 'foo',
	b: 12,
	c: 'bar',
};
let { a, b } = o;

// 属性重命名
let { a: newName1, b: newName2 } = o;

// 默认值
function keepWholeObject(wholeObject: { a: string; b?: number }) {
	let { a, b = 1001 } = wholeObject;
}
export {};
