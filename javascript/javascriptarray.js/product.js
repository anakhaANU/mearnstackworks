var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]

// var products=arr.map(products)
// console.log(products)
//1.number of items
// console.log(products.length);
//3.product name only
// var product_name=products.map((produ)=>produ[1])
// console.log(product_name)
//2. available item
// let aval_stock=0;
// for(let item of products){
//     if(item[3]>=0){
// aval_stock++;
//     }
// }
// console.log(aval_stock)
// var aval_item=products.filter(item=>item[3]>0)
// console.log(aval_item)
//print out of stock pro
// var out_stock_name=products.filter(item=>item[3]==0).map(item=>item[1])
// console.log(out_stock_name)

// add offer 5 rs for all product whose stock >50
var offer_product=products.filter(item=>item[3]>50).map(item=>item[2]-5)
console.log(offer_product)