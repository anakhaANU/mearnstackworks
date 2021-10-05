// var employee={id:1000,emp_name:"ram",desig:"developer",sal:"25000"}

//obj define=>{}
//key,value pairs
//values are accessed by using corrosponding key
// console.log(employee["emp_name"]);
// console.log(employee["sal"]);
// console.log(employee["desig"]);
// update emp sal as 3000
// employee["sal"]=3000
// console.log(employee)
// check for gender key is prsnt/not
// console.log("gender"in employee)

var student={
    roll:100,
    name:"nikhil",
    course:"bca",
    total:750
}
//print std name
// console.log(student["name"]);
//update total as 800
// student.total=800

// add new key value pair (grade a+)
// student["grade"]="a+"
// console.log(student)
// add 20 bonos mark 
// student.total+=20
// console.log(student)

//chk batch key is present or not if not add batch mearnstack_aug
// if("batch" in student){
//     console.log(true)
// }
// else{
//     student.batch="mearnstack_aug"
// }
// console.log(student)

// if(!("batch"in student)){
//     student.batch="mearnstack_aug"
// }
// console.log(student)

// print all key
for(let key in student){
    console.log(key)//roll.no,std name,course
    console.log(student[key])
}