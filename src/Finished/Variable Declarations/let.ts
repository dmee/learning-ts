let hello = 'Hello!';
function f(input: boolean) {
	let a = 100;

	if (input) {
		// Still okay to reference 'a'
		let b = a + 1;
		return b;
	}

	// Error: 'b' doesn't exist here
	return b;
}

// *****************************
try {
	throw 'oh no!';
} catch (e) {
	console.log('Oh well.');
}
// Error: 'e' doesn't exist here
console.log(e);

// *****************************
a++; // illegal to use 'a' before it's declared;
let a;
