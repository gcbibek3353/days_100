// write a function to convert any string to camelCase and snake_case
// example: console.log(toCamelCase("hello world thapa")); output: helloWorldThapa

const toCamelCase = str =>{
console.log(str.split(" ")[0]);
arr = str.split(" ")
str1 = ""
arr.forEach((element,index) => {
    if(index==0){
        str1+=element.toLowerCase();
    }
    else{
        str1+=element.charAt(0).toUpperCase() + element.slice(1)
    }
});
return str1;

}
console.log(toCamelCase("hello world By bivek"));
