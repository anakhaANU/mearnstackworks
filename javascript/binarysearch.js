var arr=[10,11,13,14,12,100,2,3]
//comparing 2 elmt 10 11(small 10) 11,13(11)
// arr.sort((num1,num2)=>num2-num1)//sort it as asc order//dec num2-num1
// console.log(arr)
//find elmt 13
var element=13;
var low=0;upp=arr.length-1;
var flag=0;
while(low<upp)
{
mid=Math.floor((low+upp)/2)
if(element<arr[mid]){

upp=mid-1;
}

else if(element>arr[mid])
{
low=mid+1;
}
else if(element=arr[mid])
{
flag=1;
break;
}
}
console.log(flag==0?"element not found":"element found");
