abstract class Entity {
  name: string;
  abstract age: number;
  constructor(name: string) {
    this.name = name;
  }

  showInfo(): string {
    return `My name is ${this.name}`;
  }

  abstract toString(): string;
}

// can not be instantiated

class Nurse extends Entity {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  toString(): string {
    return `
      Name: ${this.name}
      Age: ${this.age}
    `;
  }
}

const nurse1 = new Nurse('Kanda', 12);

console.log(nurse1.toString());