// write a function to calculate the sum of squares of all the elements in Array.
// Example: console.log(sumOfSquares([1,2,3])); Output: 14

const sumOfSquares = arr =>{
    return (arr.reduce((accum,curVal)=>{
        return accum+curVal**2;
    },0))
}

console.log(sumOfSquares([1,2,3,4,5]));