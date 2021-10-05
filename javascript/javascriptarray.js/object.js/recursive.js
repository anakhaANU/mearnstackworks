// var pattern="ABCABB"
//find first recursive char



// var arr=[10,11,10,20,21,21]
//duplicate elmt



// var pattern="ABCABB"

// var word_count={}
// for(let char of pattern){
//     if(char in word_count){
//        console.log(char,"first recursive char is found")
//        break;
//     }
//     else{
//         word_count[char]=1
//     }
// }


var arr=[10,11,10,20,21,21]
var duplicate={}
for(let num in arr){
    if(num in duplicate){
        duplicate[num]+=1

    }
    else{
        duplicate[num]=1
    }
}
console.log(duplicate)


