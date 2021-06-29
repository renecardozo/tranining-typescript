import { CheckingAccount } from './Polymorphism-1';

export class Stack {
  private items: number[] = [];

  public size(): number {
    return this.items.length;
  }

  public push(item: number): void {
    this.items.push(item);
  }

  public pop(): number {
    return this.items.splice(0, 1)[0];
  }

}

export class PStack {

  private items: CheckingAccount[] = [];

  public size(): number {
    return this.items.length;
  }

  public push(item: CheckingAccount): void {
    this.items.push(item);
  }

  public pop(): CheckingAccount {
    return this.items.splice(0, 1)[0];
  }

}


export class GStack<T> {
  private items: T[] = [];

  public size(): number {
    return this.items.length;
  }

  public push(t: T): void {
    this.items.push(t);
  }
  public pop(): T {
    return this.items.splice(0,1)[0];
  }
}

export class StackPro<T extends CheckingAccount> extends GStack<T>{

}