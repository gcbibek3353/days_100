// 19. write a function to check if a given string starts with a given substring 
// Example: console.log(startsWith("Hello World","hello")); output:true , console.log(startsWith("Hello World","world")); output:false 

const startsWith = (str,subStr)=>str.toLowerCase().startsWith(subStr.toLowerCase());
console.log(startsWith("Hello world","HEl"));