// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const today=new Date();
// console.log(today);
const year=today.getFullYear();
const month=today.getMonth();
const date=today.getDate();
const hour=today.getHours();
const min=today.getMinutes();
// - YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${date} ${hour}:${min}`)

// - DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year} ${hour}:${min}`)

// - DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year} ${hour}:${min}`);