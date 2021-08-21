// find the smallest positive integer value that does not occur in sequence 
const solution = (A) => {
    if (Math.max(...A) < 0) return 1;
    return [...new Set(A)] // get unique values
        .sort() // sort from low to high
        .reduce((acc, val) => {
            if (val === acc) acc++; // increment acc if value is in sequence
            return acc;
        }, 1); // set initial value to 1
};

console.log(solution([1, 2, 3])); // 4
console.log(solution([1, 3, 6, 4, 1, 2, 7, 5, 9])); // 8
