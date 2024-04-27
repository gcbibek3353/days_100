// write a function called calculateAverage that takes an array of numbers as input and returns average of those numbers

"use strict"
const calculateAverage = (arr)=>{
    return (arr.reduce((accum,currelm)=>{
        return accum + currelm;
    },0))/arr.length;
}
console.log(calculateAverage([2,3,4,5,5]))