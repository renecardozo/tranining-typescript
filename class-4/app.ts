import { PersonalCheckingAccount, BusinessCheckingAccount, CheckingAccount } from './Polymorphism-1';

import { Stack, GStack, PStack, StackPro } from './Stack';

// Test simple Stack

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size());
console.log(stack);

// Test Polymorphism Stack
const pStack = new PStack();
const businessAccount = new BusinessCheckingAccount();
const personalAccount = new PersonalCheckingAccount();
pStack.push(businessAccount);
pStack.push(personalAccount);
console.log(pStack.size());
console.log(pStack)


const gStack = new GStack<string>();

gStack.push('item 1');
gStack.push('item 2');
console.log(gStack.size());
console.log(gStack);


const gStackNumbers = new GStack<number>();

gStackNumbers.push(1);
gStackNumbers.push(2);
console.log(gStackNumbers.size());
console.log(gStackNumbers);

const gStackObj = new GStack<CheckingAccount>();

gStackObj.push(businessAccount);
gStackObj.push(personalAccount);
console.log(gStackObj.size());
console.log(gStackObj);

const stackProPersonal = new StackPro<PersonalCheckingAccount>();
const stackProBusiness = new StackPro<BusinessCheckingAccount>();