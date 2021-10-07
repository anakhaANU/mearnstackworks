class Bank{
    createAccount(p_name,accno,ac_type,min_bal)
    {
    this.p_name=p_name,
    this.accno=accno,
    this.ac_type=ac_type,
    this.balance=min_bal
    }
    deposit(amount){
        this.balance+=amount
        console.log(`your acnt${this.acno}has been credited with amt${amount}aval bal${this.balance}`);

    }
    withdrawal(amount){
        if(this.balance>amount){
            this.balance-=amount
        console.log(`your acnt${this.acno}has been debited with amt${amount}aval bal${this.balance}`);
            
        }
       else{
           console.log("transaction failed insufficient balance")
       }
    }
}

var obj1=new Bank
obj1.createAccount("ram",1000,"savings",3000)
obj1.withdrawal(10000)
obj1.deposit(3000)
