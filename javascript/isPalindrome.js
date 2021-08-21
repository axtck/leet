// check if input value is a palindrome
const isPalindrome = (x) => {
    const array = x.toString().split(""); // split into array 
    const reversed = [...array].reverse(); // reverse original

    // check if stringified values are equal
    if (JSON.stringify(array) === JSON.stringify(reversed)) return true;
    return false;
};

console.log(isPalindrome(-55));
console.log(isPalindrome(123));
console.log(isPalindrome(121));
