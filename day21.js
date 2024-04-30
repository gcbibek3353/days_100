// write a function called calculateMean that takes an array of numbers as input and returns the mean / average of those numbers . 

const calculateMean = arr => arr.length!==0 ?arr.reduce((accum,cur)=>accum+cur,0)/arr.length :0

console.log(calculateMean([10,20,30]));
console.log(calculateMean([100,200,300]));
console.log(calculateMean([]));
