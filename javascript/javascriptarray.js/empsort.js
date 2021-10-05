var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1889,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",1989,2005],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
// sort employee wrt  exp asc dec
// sort emp wrt salary
// employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
// console.log(employees)
// sort developer wrt salary
employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(employees)

//1.sort employee wrt  exp asc dec
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products)

// employees.sort((emp1,emp2)=>emp1[5]-emp1[4]-emp2[5]-emp1[4])
// console.log(employees)

// employees.sort((emp1,emp2)=>emp2[5]-emp2[4])-(emp1[5]-emp1[4])
// console.log(employees)