// write a function to reverse a string without using any built-in methods or libraries.The function should take string as input and return its reversed string 
// Example : console.log(reverseString("Hello")); Output : olleH

const reverseString = str =>{
    rev = ""
    for(i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev;
}

console.log(reverseString("hello"))