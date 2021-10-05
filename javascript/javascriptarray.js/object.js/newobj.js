var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance

accounts.sort((emp,emp2)=>emp[3]-emp[3])
console.log(accounts)

// print details of acno=1004

var accounts=accounts.filter(emp=>emp[0]==1004)
console.log(accounts)


// is there any person with balance < 2000





// print name of users with in_active account

// print details of user with max balance

var max=accounts.reduce((acnt1,acnt2)=>acnt1>acnt2?acnt1:acnt2)
console.log(max)

// print details of users with acc_type as savings anad balance > 25000