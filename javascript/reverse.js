var num=123;
var res="";
while(num!=0)//123!=0(true) 12!=0(true) 1!=0(true) 0!=0(false)
{
    let digit=num%10; //123%10=3 12%10=2 1%10=1
    res+=(digit**3)// ""+3+2+1
   num= Math.floor(num/10)
}
console.log(res);