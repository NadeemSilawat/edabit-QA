// Reverse a String without using built-in functions.

function reverseString(str){
    let reversed = '';
    for(let i = str.length-1; i>=0 ; i--){
        reversed += str[i];
    }
    return reversed
}

console.log(reverseString('nadeem Silawat'));




//------------Reverse String using Method---------------//

function revMethod(val){
    return val.split('').reverse().join('')
}

console.log(revMethod('smia'));


//------------Reverse String II---------------//

// function revStr(s,k){
//     let kRev = s.slice(0,k).split('').reverse().join('')
//     let rest = s.slice(k)    
//     return kRev + rest
// }

// console.log(revStr('abcdefih',k=2)) // Output: bacdefih


//------------Reverse String III---------------//


function reverStr(s,k){
    let arr = s.split('');
    for(let i =0; i< arr.length; i +=2*k){
        let left = i;
        let right = Math.min(i + k-1,arr.length-1);
        while(left<right){
            [arr[left],arr[right]] = [arr[right],arr[left]]
            left++;
            right--
        }
    }
    return arr.join('')
}
console.log(reverStr('abcdefih', 2)); // Output: bacdefih
console.log(reverStr('abcdefg', 2));  // Output: bacdfeg
console.log(reverStr('abcd',2))
