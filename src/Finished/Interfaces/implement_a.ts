interface ClockInterface {
	currentTime: Date;
	setTime(d: Date): any;
}

class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {
		this.currentTime = new Date();
	}
}
new Clock(1, 2);

export {};
