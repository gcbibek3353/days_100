// Q.23 
// Write a javascript function to count the occurence of each element in an array and store the count in an object. the keys of object should represent the number of times each element appears in the array . 

// Example: input : [1,2,2,3,1,4,2] output: {'1':2,'2':3,'3':1,'4':1}

const createObject = arr =>{
    obj = {}
    for(elm of arr){
        obj[elm] = (obj[elm]||0) + 1;
    }
    return obj;
}

console.log(createObject([1,2,2,3,1,4,2]));






// new thing to learn 

// student1 = {
//     name : "Bivek",
//     age : '19'
// }
// console.log(student1.name);
// console.log(student1['name']);
// line 21 and 22 are same but line 22 gives advantages of dynamically changing key of object 