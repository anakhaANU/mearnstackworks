var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1889,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",1989,2005],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
// var high_salary=[0]
// for(let employee of employees)//[1000,"ram",15000,"hr",1990,2000],
// {
// if(high_salary<employee[2]){//0<15000
    
// high_salary=employee[2]
    
// }
// }
// console.log("max salary=",high_salary)

// low salary
var lowest_salary=employees[0][2]
for(let employee of employees)
{
if(lowest_salary>employee[2]){//15000>15000 15000>25000 15000>7000
    lowest_salary=employee[2]//7000
}
}
console.log("low salary=",lowest_salary)


// print name of employee who is taking highest salary
