// 30. Write a script which generates a random hexadecimal number.
const letters="0123456789ABCDEF";
const digitcount=20;
let code="";
for(let i=0;i<digitcount;i++){
    code+=letters[Math.floor(Math.random()*16)];
}
console.log(code);