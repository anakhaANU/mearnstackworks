var arr=[2,3,4,5,6,7]
//print square of all even numbers

// var even_square=arr.filter(num=>num%2==0) .map(num=>num**2)
// console.log(even_square)
var odd_square=arr.filter(num=>num%2!=0) .map(num=>num**2)
console.log(odd_square)
