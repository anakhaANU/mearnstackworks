var num=2,low=8,upp=27;
for(let i=1;i<=upp;i++){//i=1 i=2 i=3 i=4 i=5
//1**2=1
//2**2=4
//3**2=9
//4**2
let res=i**num;//1**2=1(its not b/w low and up)//1**2 (no)i inc i=2 2**2(res no) i inc i=3 3**2(true) i=4 4**2(true) i=5**2(true)
if((res>low) &(res<=upp))//8 res=1 res=4 res=9(9 is b\w 8 and 27) res=16 res=25   27
{
console.log(i);//3,4,5
}
}
