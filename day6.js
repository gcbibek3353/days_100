// Write a function to determine whether a given string is a palindrome or not. ignore spaces, punctuation and capitalization
str1 = "A man , a plan , a canal , Panama" // Output : true
str2 = "racecar" // Output : true
str3 = "hello" // Output : false

const isPalindrome = (str)=>{
str = str.toLowerCase();
let r_str = str.split("").reverse().join("");
return r_str===str ? true : false;
}

isPalindrome(str2)

// New method 
// join() is like reverse of split()
// join joins two or more Element of array into single String