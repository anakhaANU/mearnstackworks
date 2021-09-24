//0,1,2,3
for(let row=0;row<=3;row++)

{
    let str="";//string empty
    
    for(let col=0;col<=6;col++)
    {
        if(row==3|col+row==3|col-row==3)
    
    
    
    {
      str+="*";
    }
    console.log(str) 
}
}
