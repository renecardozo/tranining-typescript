export abstract class CheckingAccount {
  abstract open(initialAccount: number): Error | void;
}

export class BusinessCheckingAccount extends CheckingAccount {
  open(initialAccount: number) {
    if (initialAccount < 1000) {
      throw new Error('Business Account must have an initial deposit of 1000 Euros')
    }
  }
}

export class PersonalCheckingAccount extends CheckingAccount {
  open(initialAccount: number) {
    if (initialAccount <= 10) {
      throw new Error('Bussines Account must have an initial deposit of 10 Euros');
    }
  }
}

const RobotCheckingAccount = {
  open: (initialAccount: number) => {
    if (initialAccount < 0) {
      throw new Error('Bussines Account must have an initial deposit of 0 Euros');
    }
  }
}

class BankManager {
  createAccount(checkingAccount: CheckingAccount, initialAccount: number) {
    try {
      checkingAccount.open(initialAccount);
      if (checkingAccount instanceof BusinessCheckingAccount) {
        console.log('Business Account successfuly create!');
      } else if (checkingAccount instanceof PersonalCheckingAccount) {
        console.log('Personal Account succefully created!')
      } else if (RobotCheckingAccount instanceof Object) {
        console.log('Pet Account succefully created!')
      } else {
        console.log('Not detected type of checkingAccount object');
      }
    } catch (error) {
      throw error;
    }
  }
}


const businessAccount = new BusinessCheckingAccount();
const personalAccount = new PersonalCheckingAccount();

const bankManager = new BankManager();

bankManager.createAccount(personalAccount, 200);
bankManager.createAccount(businessAccount, 5000);
bankManager.createAccount(RobotCheckingAccount, 0);