let check_palindrome = (string)=>{
    let string2 = "";
    for(let i=string.length-1; i>=0; i--) string2+=string[i];
    if(string2===string) return "Palindrome";
    else return "Not Palindrome";
}