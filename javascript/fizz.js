var num=15;
if(num%15==0)//15%3=0
{
    console.log("fizz buzz");
}
else if(num%5==0)
{
    console.log("buzz");
}
else if(num%3==0)
{
    console.log("fizz");
}

var num=25;
var res="";//res=""
if(num%3==0)
{
    res+="fizz";//res=""+"fizz"
}
if(num%5==0){
    res+="buzz";//res=""+"buzz"
}
console.log(res);//fizzbuzz