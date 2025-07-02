/**
 * ============================================================================
 * Create an object called bankAccount with the following properties and values:
 * balance: 1000 (default value)
 * Use a getter to define a property called formattedBalance, which returns the balance with a currency symbol (e.g., "$1000").
 * Use a setter to define a property called balance, which updates the account balance and automatically updates 
 * the corresponding formattedBalance value.
 * Implement a method called transfer on the bankAccount object that takes two bankAccount 
 * objects and an amount as arguments. The method should transfer the specified amount from 
 * the current account to the target account. Ensure that the balance and formattedBalance properties of both accounts are updated correctly.
 */

// ============================================================================
// Task 3: Object Property Getters and Setters 
// ============================================================================


const bankAccount = {

    _balance: 1000, 

    //getter for formattedBalance
    get formattedBalance() {
        return `$${this._balance}`;
    },

    // setter for balance 
    set balance(amount) {
        if(typeof amount === 'number' && amount >=0) {
            this._balance = amount;
        }
    },
    // this is the method to transfer money 
    transfer(targetAccount, amount) {
        if(typeof amount === 'number' && amount > 0 && this._balance >= amount) {
            this._balance -= amount; // deduct from the current account
            targetAccount.balance += amount; // this is the setter that updates the target account balance
        }else {
            console.error("Invalid transfer amount or insufficient funds.");
            return;
        }

        console.log(`Transferred $${amount} to target account.`);
        console.log(`New balance: ${this.formattedBalance}`);
        console.log(`Target account balance: ${targetAccount.formattedBalance}`);

    }
};

