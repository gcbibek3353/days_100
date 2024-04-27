// Write a function that takes number as input and returns sum of its digits 
// sumOfDigits(1234) Output = 10

const sumOfDigits = nums=>{
    return(String(nums).split("").reduce((accum,curelm)=>accum+Number(curelm),0));
    
}
console.log(sumOfDigits(4363))