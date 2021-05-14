// Problem: Write a function which takes in a string and returns counts of each character in the string.

function countStringCharacter(str){
    let chars = {}
    for (let index = 0; index < str.length; index++) {
        chars[str[index]] = (chars[str[index]] || 0) + 1;
        
    }
    return chars
}

console.log(countStringCharacter("asfas asd asdas d asd ashi"));