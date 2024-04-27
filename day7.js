// write a function findMax that takes an array of numbers as input and returns the maximum number in array. 
// Example : console.log(findMax([1,5,3,9,2])); Output : 9

const findMax = arr =>{
    // My attempt
    // return (arr.reduce((accum,curvalue)=>{
    //     if(accum<curvalue) return curvalue;
    //     else return accum;
    // },0))

    // Thapa Attempt
    // return(Math.max(2,3,555,67)) 
    return(Math.max(...arr))

}
console.log(findMax([1,3,23,5,22]));


// NEw thing
// Math.max(num1,num2,num3) --> we cannot pass array inside Math.max()