/**
 * 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly
 */
interface Point {
	readonly x: number;
	readonly y: number;
}
let p1: Point = {
	x: 10,
	y: 20,
};
p1.x = 5; // error!

export {};
