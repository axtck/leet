/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let roman = "";

    // list symbols and vals
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    const parts = [];
    for (let i = 0; i < values.length; i++) {
        if (num >= values[i]) {
            parts.push(values[i]); // if number is higher than value, push into separate array
            num -= values[i]; // subtract value from number
            i = -1; // restart loop
        }
    }
    roman = parts.map((t) => {
        return symbols[values.indexOf(t)]; // return corresponding symbol 
    }).join(""); // join to string

    return roman;
};
