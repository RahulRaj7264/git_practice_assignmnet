let str ="Mihir";
let str2 ="";
for(let i=str.length-1;i>=0;i--){

    str2+=str[i];

}
if(str2==str){
    console.log("palindrom");
}
else{
    console.log("not palindrom");
}