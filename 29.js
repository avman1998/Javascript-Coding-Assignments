// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum=0,oddSum=0;
for(let i=0;i<=10;i++){
    if(i%2===0)
    evenSum+=i;

    else
    oddSum+=i;
}
console.log(evenSum);
console.log(oddSum);