function identity<T>(arg: T): T {
	return arg;
}
identity<string>('myString'); // type of output will be 'string'

identity<number>('myString'); // error

identity('myString'); // type of output will be 'string'
export {};
