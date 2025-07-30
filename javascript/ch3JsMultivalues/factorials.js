// given n find factorial of that interge
// factorial of n = n*(n-1)*(n-2)*(n-3)*.........2*1

function factorial(n){
    let result = 1;
    for (let i = 2; i <=n; i++) {
        result = result * i;
    }

    return result;

}
console.log(factorial(5))
