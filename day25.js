// Q.25 
// write a function to calculate the factorial of a number using Recursion.

// console.log(factorial(5)); Output : 120 

// function factorial(num){
//     if(num === 1 || num ===0) {
//         return 1
//     }
//     else{
//         return num * factorial(num -1);
//     } 
// }

const factorial = num => (num === 1 || num ===0)? 1 : num * factorial(num -1);


console.log(factorial(5));