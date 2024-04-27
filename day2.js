// YOu are required to implement a function generateHash that generates a hash tag from a given input string.
//Example str = "hello world" hashtag = "#HelloWorld"

str = "java script in depth"

const generateHash = str => {
    words = str.split(" ");

    const capitalize = word => {
        return word.replace(word[0], word.split("")[0].toUpperCase())
    }
    return words.reduce((accum, curr) => {
        return accum + capitalize(curr);
    }, "#");

}

console.log(generateHash(str));