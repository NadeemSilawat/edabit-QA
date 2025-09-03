// Check if a string is a palindrome.

function palindrome(str){
    const convert = str.toUpperCase();
    const rev = convert.split('').reverse().join('')
    return convert === rev;
}

console.log(palindrome("str"));
console.log(palindrome("madam"));


