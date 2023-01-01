// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two) 
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
const sortAges=ages.sort((a,b)=>a-b);
console.log(sortAges);
const ageLength=sortAges.length;
console.log(`Min : ${sortAges[0]} and Max : ${sortAges[ageLength-1]}`);

// - Find the median age(one middle item or two middle items divided by two) 
if(ageLength%2!==0)
    console.log(arr[ageLength/2]);

else
console.log(sortAges[(ageLength/2)-1],sortAges[ageLength/2]);

// - Find the average age(all items divided by number of items)

const sum=sortAges.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum/ageLength);

// - Find the range of the ages(max minus min)
console.log(sortAges[ageLength-1]-sortAges[0]);


// - Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs((sortAges[0]-sum/ageLength).toFixed(2)));
console.log(Math.abs((sortAges[ageLength-1]-sum/ageLength).toFixed(2)));

