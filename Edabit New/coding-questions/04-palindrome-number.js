// function palindrome(num){
//     let reversed = '';
//     for(let i = num.length-1; i>=0; i--){
//         reversed += num[i]
//     }
//     return reversed
// }

// console.log(palindrome('121'));
// // console.log(palindrome(8021));


function palindrome(num){
    const convStr = String(num);
    const rev = convStr.split('').reverse().join('');
    return rev === convStr
}

console.log(palindrome(121));
console.log(palindrome(8021));
