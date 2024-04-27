// write a function called countChar that takes two parameters: a string and a character to count . the function should return the number of times the specified character appears in the string
"use strict"
let str = "missisipi";
let char = "m";

const countChar = (str,char)=>{
str = str.toLowerCase();
char = char.toLowerCase();

const letters = str.split("");
return (letters.reduce((accum,curr)=>{
    if(curr===char){
        accum++;
    }
    return accum;
},0));

}

console.log(countChar(str,char));