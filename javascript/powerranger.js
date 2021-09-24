var num=2;
res=0 ,sum=0;
for(let i=1;i<=num;i++){ //i=1 1<=2(true) i(incr) i=2 2<=2(true)
    res=res*10+num;//res=0*10+2=2  res=2*10+2=22
    sum+=res;

}
console.log(sum)