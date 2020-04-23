interface SquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	// ...
	return {
		color: '',
		area: 1,
	};
}

createSquare({ colour: 'red', width: 100 });
export {};
