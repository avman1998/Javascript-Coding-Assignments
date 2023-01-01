// 28. Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=21;i<=100;i++){
    let flag=0;
    for(let j=2;j<=i/2;j++){
        if(i%j===0){
            flag++;
            break;
        }
    }
    if(flag===0){
        console.log(i);
    }
}