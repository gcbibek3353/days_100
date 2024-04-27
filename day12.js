// write a program that takes an array of integers as input and removes any duplicare elements, returning a new array with only the unique elements. 
// console.log(removeDuplicate([1,2,3,2,3,4,1])); Output: [1,2,3,4]

inp1 = [1,2,3,2,3,4,1];
const removeDuplicate = arr=>{
    const set1 = new Set(arr);
    return(Array.from(set1));
}
console.log(removeDuplicate(inp1));