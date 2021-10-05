//var text="hai hello hai hello"

// print word count
//hai:2,hello:2

var person={
    p_id:100,
    p_name:"ajay",
    age:25
}

//chk for vaccinated key is present if yes vaccinated:true else vaccinated:false
if("vaccinated"in person){
    person.vaccinated=true
}
else{
    person.vaccinated=false
}
console.log(person)
//chk for vaccinated key is present if yes vaccinated:add one else vaccinated:1

if("vaccinated"in person){
    person.vaccinated+=1
}
else{
    person.vaccinated=1
}
console.log(person)