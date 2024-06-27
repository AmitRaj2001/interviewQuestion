//Write a JavaScript program to find the maximum number in an array. 


const arr = [10, 20, 30, 50, 80, 15];

function findMaxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxNumber(arr));




// we can use Math.max(...arr) method to find the maximum number in an array.

