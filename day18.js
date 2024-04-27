// write a function to check if a character is uppercase or lowercase
// example: console.log(isUpperCase("s")); Output : false ,  console.log(isUpperCase("A")); Output : true 

const isUpperCase = char =>(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90) ? true : false

console.log(isUpperCase("O"));