// 15. Calculate the slope, x-intercept and y-intercept of
// y = 2x -2
//
// For y=mx+c :
// Slope = m
// x-intercept = -c/m
// y-intercept = c

const equation = "y = 2x -2";
const newEq = equation.split(" ");
const newEq2 = newEq[2].split("");
console.log(newEq2);
function calculate(m, c) {
  console.log("Slope", m);
  console.log("X-intercept", -c / m);
  console.log("Y-intercept", c);
}
calculate(newEq2[0], newEq[3]);
