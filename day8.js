// write a function factorial that takes a non-negative int number as input and returns its factorial.

const factorial = num =>{
    if(num==0||num==1) return 1;
    else return num*factorial(num-1);
}

console.log(factorial(4));