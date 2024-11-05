function avg(numbers) {
    //let s=0;
    //for(let i =0; i <numbers.length; i++){
    //    s += numbers[i];
   // }
    //return s/ numbers.length;
    let s= numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

function factorial(num){
    if (num < 0 || num > 15) return -1;

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

//exports.avg = avg;
//exports.prime =prime;
//exports.factorial= factorial;

module.exports = {
    avg,
    prime,
    factorial
}
