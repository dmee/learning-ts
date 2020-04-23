class Animal {
	private name: string;
	constructor(theName: string) {
		this.name = theName;
	}
}

class Dog extends Animal {
	constructor(name: string) {
		super(name);
	}
	getName() {
		return this.name;
	}
}
new Dog('dog').getName();
new Animal('Cat').name; // 错误: 'name' 是私有的.
export {};
