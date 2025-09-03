function reverseWord(s){
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')


    // return s.split(' ').map(word => [...word].reverse().join('')).join(' ')
}   

console.log(reverseWord("Let's take LeetCode contest"));
console.log(reverseWord("Mr Ding"));    
