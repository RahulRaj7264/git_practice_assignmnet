let check_prime = (num)=>{
    let count = 0;
    for(let i=1; i<=num; i++) count++;
    if(count==2) return "Prime";
    else return "Not Prime";
}
console.log(check_prime(5));