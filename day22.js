// Q. 22
// write a function called calculateMedian that takes an array of numbers as input and returns the median of those numbers . 
// If array has an odd number of elements , the median is middle number 
// If array has an even number of elements, the median is average of two middle terms 

// Example : console.log(findMedian([3,3,5,9,15])); Output: 5  ,   console.log(findMedian([3,5,7,9])); Output: (5+7)/2=6

const findMedian = arr =>{
    arr=arr.sort((a,b)=>a-b);
   return (arr.length % 2 === 0) ? (arr[arr.length/2] + arr[(arr.length-2)/2])/2 : arr[(arr.length-1)/2]
}

console.log(findMedian([2,19,3,4,8]))
console.log(findMedian([2,19,3,4,8,16]))