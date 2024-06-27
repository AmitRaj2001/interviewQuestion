// Write a JavaScript function to check if a given string is a palindrome 
//(reads the same forwards and backwards).

let str = "amittima"
function checkPalindrome(string) {
    // let result = string.split("").reverse().join("");

    // if (string === result) {
    //     return true;
    // }
    // return false;


    return string === string.split("").reverse().join("");
}

console.log(checkPalindrome(str));