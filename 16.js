// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const radius = Number(prompt("Enter radius"));
const pi = 3.14;
const area = pi * radius * radius;
const circumference = 2 * pi * radius;
console.log("Area", area);
console.log("Circumference", circumference);
