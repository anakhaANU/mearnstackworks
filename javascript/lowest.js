var expences=[10000,12000,7000,20000,4000,3000,22000,12000,13000]
// let high_exp=expences[0]//ie 10000,12000
// c
// {
// if(high_exp<amount)//10000>10000 10000>12000(flse) 10000>7000(its true so now the lower exp is 7000 so we should add low exp is 7000) 7000>20000 7000>4000 4000>3000
// {
// high_exp=amount//low_exp=3000
// }

// }
// console.log(high_exp)
count=0;
for(let amount of expences){
    if(amount>15000){
        count++;
    }
}
console.log("exp>15000 count",count);

//arr1[10,20,21,22]
//arr2=[11,12,20,21]
//print common element from this array
//arr[10,11,12,13,14,11]
//search for 15 in this array elmnt not found element found