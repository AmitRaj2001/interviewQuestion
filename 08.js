//9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 


function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacci(10));