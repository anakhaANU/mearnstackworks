var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]
//sort the product stock wise
// products.sort((item1,item2)=>item2[3]-item1[3])
// console.log(products)

// dec order of price
// products.sort((item1,item2)=>item2[2]-item1[2])
// console.log(products)
// dec order of stock
products.sort((item1,item2)=>item2[1]-item1[3])
console.log(products)