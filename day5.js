// write a function to sort an array of numbers in ascending order without using built in sort() method 

nums = [6,3,8,5,10,2]


// My attempt
// const sortArr = arr =>{
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<i;j++){
//             if(arr[j]>arr[i]){
//                 let temp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j] = temp;
//             }
//         }

//     }
//     return arr;
// }

// thapa attempt 
const sortArr = arr=> arr.sort((a,b)=>a-b)

console.log(sortArr(nums))