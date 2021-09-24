
var arr=[2,3,4,6,5,7,8] //op[1,2,3,7,8,9]
//if num<5 map into num-1 else num>5 map into num+1
var op=[]// new array for o/p
for(let num of arr)
{
if(num<5)
{
 op.push((num-1))      // we want o/p as [1,2,3,7,8,9] so we create an array for o/p
}
else if(num>5)
{
    op.push((num+1))
}
else{
    op.push(num)
}
}
console.log(op)