interface IAnimal {
  showName(): string;
  run(): string;
  toString(mensage: string): void;
}

class Cat implements IAnimal {
  private name: string;

  constructor(nName: string) {
    this.name = nName;
  }

  showName(): string {
    return `Hello my name is ${this.name}`
  }

  run(): string {
    return 'I am running!!';
  }

  toString(message: string): void {
    console.log(message);
  }
}