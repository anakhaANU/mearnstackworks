//find=> return single obj
//filter=>full res return



var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]

var search_item=products.find(item=>item[2]==20)
console.log(search_item)

var search_item=products.find(item=>item[1]=="treat")
console.log(search_item)
