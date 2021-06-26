class Employee {
  // access modifiers 
  // private, protected, public
  // readonly
  // properties and methods

  // properties
  private name: string;
  private ci: string;
  private birthday: Date;
  protected nickname: string;
  phone: number;

  constructor() {
    this.name = 'Lucho';
    this.ci = '1234ve';
    this.birthday = new Date();
    this.nickname = 'Pepe';
    this.phone = 12345;
  }

  public toString() {
    return `
      Name: ${this.name}
      CI: ${this.ci}
      Birthday: ${this.birthday}
      nickname: ${this.nickname}
    `;
  }

  private doSomething() {
    console.log('Only exist in the class Employee');
  }

  protected isProtected() {
    console.log('I am protected method!');
  }
}

class Doctor extends Employee {
  showDetail() {
    this.isProtected();
    console.log(`
      ${this.nickname}
    `);
  }
}

// const empl1 = new Employee();
// console.log(empl1.phone);
// console.log(empl1.isProtected())
const doc1 = new Doctor();
doc1.showDetail();