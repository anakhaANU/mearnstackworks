var num=7;
flag=0;
for( let i=2;i<num;i++){
{
if(num%i==0) //4%2==0(true) so set flag=1
flag+=1;
break;
}
}
if(flag==0)
{
console.log("prime");
}
else 
{
console.log("number not prime");
}