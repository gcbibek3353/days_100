// write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two and false otherwise
// console.log(isPowerOfTwo(8)); OUtput : True 
// console.log(isPowerOfTwo(7)); OUtput : False 

const isPowerOfTwo = num =>{
    let bool = false;
    for(let i =0;i<num;i++){
        if(2**i===num) bool=true;
    }
    return bool;
}
console.log(isPowerOfTwo(15));