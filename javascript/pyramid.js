//0,1,2,3
for(let row=0;row<4;row++)
//space 3,2,1 so loop decrement
//row=0
{
    let str="";//string empty
    //1st itration 3 space
    for(let space=0;space<(4-row-1);space++)//4-row-1(4=>row already initialized) space=0 0<(3); space=1  1<4-0-1 1<3(condition true) space=2 2<3(true)
    {
      str+=" ";
    //   (if condition true 1 space appended)
    }
    for(let col=0;col<(row+1);col++)// col=0;  0<0+1 0<1(true) col++ 1<1(false)
    {
      str+="* ";//"  *"
    }
    console.log(str) 
}