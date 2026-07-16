class Bank {
    // Private Properties and Methods
    #percentageInProfit = 1.5;
    #calculatePercentage() {
        console.log(
            `Your income will be calculated by ${this.#percentageInProfit} * ${this.balance}`
        );
    }
    // Private Properties and Methods

    static bankCode = 'CBIN0078';
    static getBankCode() {
        return `Bank Code: ${this.bankCode}`;
    }

    constructor(name, mobile, email, amount = 0) {
        this._accountHolderName = name;
        this.mobile = mobile;
        this._email = email;
        this.balance = amount;
    }

    set email(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    deposit(amount) {
        this.balance += Number(amount);
        console.log(
            `Amount of Rs. ${amount} is Deposited by ${this._accountHolderName}`
        );

        // console.log(sendDepositEmail.call(this, amount));
    }
    checkBalance() {
        console.log(`Your balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance <= 0 || this.balance < amount) {
            console.log('Insufficient Balance');
            // console.log(InsufficientFundEmail.call(this, amount));
        } else {
            this.balance -= amount;
            const main = sendWithdrawEmail.call(this, amount);
            console.log(main);
            
            
        }
    }
    getPercentage() {
        console.log(`The Percetage is ${this.#percentageInProfit}`);
        this.#calculatePercentage();
    }
    checkBankProfile() {
        const { _accountHolderName, mobile, email, balance } = this;
        console.log(`Account Holder = ${_accountHolderName} `);
        console.log(`Mobile no. = ${mobile}`);
        console.log(`Email = ${email}`);
        console.log(`Account Balance = ${Number(balance)}`);
    }
    /***
     *
     * set propertyname(){
     *     this._propertyName
  
       }
     */
    set accountHolderName(value) {
        this._accountHolderName = value;
    }
    get accountHolderName() {
        return this._accountHolderName;
    }
}

//this email is to be send when any amount is withdrawn
function sendWithdrawEmail(amount) {
    return `To ${this.accountHolderName},
    This is to inform you that amount of Rs.${amount} is withdrawn.`;
}

//email for the insufficient balance
function insufficientFundEmail(amount) {
    return `To ${this.accountHolderName},
    You're trying to withdraw Rs.${amount}, but you don't have sufficient balance.`;
}


//email for any money deposited
function sendDepositEmail(amount) {
    return `To ${this.accountHolderName},
    This is to inform you that amount of Rs.${amount} is deposited.`;
}


let obj1 = new Bank('Raj', '5959561000', 'raj45@gmail.com', 522000);
obj1.withdraw(1000);    