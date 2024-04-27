// 16. write a function findMin that takes an array of numbers as input and returns the minimum value found in the array .
// Examle : console.log(findMin([5,-3,0,12,-7])); Output: -7


// My attempt --> Mistake 
// const findMin = arr =>{
//     return (arr.reduce((accum,curVal)=>{
//         if(accum>curVal) return curVal;
//     },100))
// }

// Thapa Attempt1 
const findMin = arr =>{
     arr = arr.sort((a,b)=>{
        // if(a>b) return -1;
        if(b>a) return -1;
    });
    // return parseInt(arr.slice(-1));
    return arr[0];
}


console.log(findMin([2,3,-4,6]));