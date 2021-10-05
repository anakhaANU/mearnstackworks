var accounts = {
    1001: { acno: 1001, password: "userone", balance: 5000 },
    1002: { acno: 1002, password: "usertwo", balance: 7000 },
    1003: { acno: 1003, password: "userthree", balance: 8000 },
    1004: { acno: 1001, password: "userone", balance: 9000 },

}

// authenticate

function login(acno,password){
    if(acno in accounts){
        let pwd=accounts[acno].password
        if(pwd==password){
            console.login("login success");
        }
        else{
            console.login("invalid password");
        }
    }
    else{
        console.login("invalid account number");
    }
}