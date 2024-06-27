//10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 


function titleCase(str) {
    //return str.replace(/\b\w/g, l => l.toUpperCase());

    let words = str.split(" ");
    let result = [];
    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(" ");
}

console.log(titleCase("hello world")); // Hello World