var arr=[100,150,75,180,45,40,500,25,50]
//product 50 below
var evl_amount=50;//compare 49 with each elmt
var flag=0;
for(let price of arr){
    if(price<avl_amount){
        flag=1;
        break
    }
}
if(flag==0){
    console.log("there are product available under 50")
}
// gcd of(14,21)create a prgrm to find gcd of 2 number