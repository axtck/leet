const isPalindrome = (x) => {
    const array = x.toString().split("");
    const reversed = [...array].reverse();

    if (JSON.stringify(array) === JSON.stringify(reversed)) return true;
    return false;
};

console.log(isPalindrome(-55));
console.log(isPalindrome(123));
console.log(isPalindrome(121));
