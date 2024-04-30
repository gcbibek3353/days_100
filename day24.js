// Q. 24 
// write a function called findMode that takes an array of numbers as input and returns the mode of the array ( the number that appears most frequently). 
// Example: console.log(findMode([1,2,2,3,1,4,2])); output : 2 

const findMode  = arr =>{
    let counts = {}
    let highest = 0;
    let mode;
    for(elm of arr) {
        counts[elm] = (counts[elm] || 0) + 1;
        if(counts[elm]>highest){
            highest = counts[elm];
            mode = elm;
        }
    }
    return mode;

}
console.log(findMode([1,2,2,3,1,4,2]));