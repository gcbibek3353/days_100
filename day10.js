// write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal and false otherwise.
arr1 = [1, 2, 3]
arr2 = [1, 2, 5]

const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length != arr2.length) return false;
    // My attempt --> Not correct 
    // for (i = 0; i < arr1.length; i++) {
    //     if (arr1[i] != arr2[i]) {
    //         return false;

    //     }
    //     else {
    //         return true;
    //     }
    // }

    // thapa attempt
    return arr1.every((curvalue,index)=>curvalue===arr2[index])
}
console.log(arraysAreEqual(arr1, arr2));