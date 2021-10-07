// this=>used to call current cls obj   (to call current cls instance variable)
//js =>interpreted


// student class
// set student(rol,course,stud_name)    rol,course,stud_name=>local var

class student{
    constructor(rol,course,stud_name){
        this.rol=rol,//instance var
        this.course=course,
        this.stud_name=stud_name
    }
    printStudent(){
        console.log(this.rol,this.course,this.stud_name);
    }
}
//var refname=new classname()
// var stud1=new student();
// stud1.setStudent(1,"bca","nithiya")
// console.log(stud1.stud_name); // to call obj outside class use refname  //inside class use this
// stud1.printStudent();
//duty of setStudent()or constructor initializing instance variable

//constructor is automaticaly  call when the obj is created
//dont need to call separtely


var stud1=new student(1,"bca","nithiya")
stud1.printStudent()

