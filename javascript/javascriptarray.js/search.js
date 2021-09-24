var arr=[10,11,12,13,40,15]
// var element=13;
// for(let num of arr){ //10, 11,12,13
//     if(num==element){// 10==13(no) 11==13 12==13 13==13(true)
//         console.log("element found")
//         break;
//     }
// }
// var element=12;
// for(let num of arr){
//     if(num==element){
//         console.log("element found")
//         break;
//     }
//     else{
//         console.log("element not found")
//     }
// }

var element=12,flag=0;
for(let num of arr){//10,11,12
    if(num==element){//10==12 11==12 12==12(true so flag is set to 1)
        flag+=1;
        break;


    }
}
if(flag==0){
    console.log("element not found")
}
else{
    console.log("element found")
}