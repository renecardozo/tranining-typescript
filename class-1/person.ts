class Person {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFirstName() {
    return this.firstName;
  }

  public getLastName() {
    return this.lastName;
  }

  public getAge() {
    return this.age;
  }
}

// Static class

class Photocopier {
  public static print(person: Person) {
    console.log(`
      Name: ${person.getFirstName()}
      Last Name: ${person.getLastName()}
      Age: ${person.getAge()}
    `);
  }
}

const p1 = new Person('Pepe', 'lucho', 12);
Photocopier.print(p1);
