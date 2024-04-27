// Q1. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered
str = "Watch thapa technical javascript course on youtube";

// My attempt
// const findLongestWord = (str)=>{
//     if(str=="" || str ==" "){
//         return false;
//     }
//     else{
//        strarr = str.split(" ");
//        console.log(strarr);
//        let greatest=strarr[0];
//        strarr.forEach(element => {
//         if(greatest.length<element.length){
//             greatest = element;
//         }
//        });
//        console.log(greatest);

//     }
// }
// findLongestWord(str)



// Thapa answer 
const findLongestWord = (str) => {
        if (str.trim().length === 0) {
                return false;
        }
        words = str.split(" ");

        //    method 1 :
        // return words.sort((a,b)=>b.length-a.length)[0]
        return words.sort((a, b) => a.length - b.length).at(-1);
        

        //    method 2 :
        //    return words.reduce((accum,currelm)=>(accum.length<currelm.length)?currelm:accum);
}


console.log(findLongestWord(str));




// New thing

// trim()-->Removes all spaces from text except for single spaces between words
// sort()
// reduce() --> reduce an element of an array to single value
// at() --> to access values of array using negative index
