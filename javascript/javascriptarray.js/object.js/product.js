//{p_code:100,name:"product",price:250,avl_qty:50}

//1.prod name
var product={
         p_code:100,
         name:"product1",
         price:250,
         avl_qty:50
}
console.log(product["name"])




//2.update stock as current stock+30

// product.avl_qty+=30
product.avl_qty+=30


//3.check for discount key is present 
console.log("dicsount" in product);



//4. add discount:10%
product.discount="10%"
console.log(product)

// chk batch_code is present
console.log("batch_code" in product)


//if not add batch_code=est_2k21_09
if("batch_code" in product){
    console.log(true)
}
else{
    product.batch_code="est_2k21_09"
}
console.log(product)