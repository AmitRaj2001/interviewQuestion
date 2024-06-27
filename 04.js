//4. Write a JavaScript program to reverse a given string.


let str = "amittima"

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(str));