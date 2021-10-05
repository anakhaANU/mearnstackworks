var arr=[2,3,4,5,6,7]
// var total=arr.reduce((num1,num2)=>num1+num2)
// console.log(total)

// var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max)
// var total=arr.reduce((num1,num2)=>num1+num2)

// var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)

var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]

//highest price
var costly_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly_product)

var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(low_cost)

