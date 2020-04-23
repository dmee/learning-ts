interface ClockConstructor {
	new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
	tick(): any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
	return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
	constructor(h: number, m: number) {}
	tick() {
		console.log('beep beep');
	}
}
class AnalogClock implements ClockInterface {
	constructor(h: number, m: number) {}
	tick() {
		console.log('tick tock');
	}
}

createClock(DigitalClock, 12, 17);
createClock(AnalogClock, 7, 32);
export {};
