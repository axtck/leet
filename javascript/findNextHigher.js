const solution = (A) => {
    if (Math.max(...A) < 0) return 1;
    return [...new Set(A)]
        .sort()
        .reduce((acc, val) => {
            if (val === acc) acc++;
            return acc;
        }, 1);
};

console.log(solution([1, 2, 3]));
console.log(solution([1, 3, 6, 4, 1, 2, 7, 5, 9]));
