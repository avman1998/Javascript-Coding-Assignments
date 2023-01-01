// 35. Write a functions which checks if all items are unique in the array.

function checkArr(arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j <= arr.length; j++) {
      if (arr[j] === arr[i]) {
        flag++;
        break;
      }
    }
  }
  if (flag === 0) {
    console.log("All unique");
  } else {
    console.log("Not Unique");
  }
}
const arr = [1, 2, 12, 4, 5];
checkArr(arr);
