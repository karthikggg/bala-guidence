// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

function boomIfSeven(arr) {
  if (!arr) {
    return "please provide array cause there is no array";
  } else {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].toString().includes("7")) {
        return `BOOM!!!!! ${arr[i]} contains 7`;
      }
    }
    return "there is no 7 in array";
  }
}
console.log(boomIfSeven([1, 2, 3, 4, 5, 6, 7]));
console.log(boomIfSeven([8, 6, 33, 100]));
console.log(boomIfSeven([2, 55, 60, 97, 86]));

//without any built in functions include

function withoutBuiltIn(arr) {
  if (!arr) {
    return "please provide array cause there is no array";
  } else {
    for (i = 0; i < arr.length; i++) {
      let val = arr[i].toString();
      for (j = 0; j < val.length; j++) {
        if (val[j] == "7") return `BOOM!!!!! ${val} contains 7`;
      }
    }
    return "there is no 7 in array";
  }
}
console.log(withoutBuiltIn([1, 2, 3, 4, 5, 6, 7]));
console.log(withoutBuiltIn([8, 6, 33, 100]));
console.log(withoutBuiltIn([2, 55, 60, 97, 86]));
