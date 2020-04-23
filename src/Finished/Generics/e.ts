function identity<T>(arg: T): T {
	return arg;
}

let myIdentityA: <T>(arg: T) => T = identity;

let myIdentityB: <U>(arg: U) => U = identity;
export {};
