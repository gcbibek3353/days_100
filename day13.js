// write a function that takes a string as input and returns the count of vowels in the string. consider 'a' ,'e', 'i','o','u' as vowels both lowercase and uppercase. 
// Example: console.log(countVowels("Hello WOrld")); Output : 3

const countVowels = str =>{
    // My Attempt 
//     str = str.toLowerCase();
//     vowelsStr = "aeiou";
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         for(let j=0;j<vowelsStr.length;j++){
//             if(str[i]==vowelsStr[j]) count++;
//         }
//     }
// return count;

        // Thapa Attempt
        const vowels = ['a','e','i','o','u'];
        str = str.split('');
        let count = 0;
        for(let char of str){
            if(vowels.includes(char.toLowerCase())){
                count++;
            }
        }
        return count;
}




console.log(countVowels("hello WOrlid"));

// New things 
// for of loop :
// array1.includes() Method :