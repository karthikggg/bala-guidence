// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples

// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
  let lengthOfNonNested = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      lengthOfNonNested += getLength(arr[i]);
    } else {
      lengthOfNonNested++;
    }
  }

  return lengthOfNonNested;
}

console.log(getLength([1, 2, [2, 0], [8, 9, 8], [9, 8, 9]]));
// console.log(getLength([1, [2, [3, 4]]]));
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
//console.log(getLength([1,2,9,8,[7,1]]));
console.log(getLength([2, [2], 9, [2], 1]));





function getLengthArr(arr) {
  let lengthOfNonNested = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      lengthOfNonNested = [...lengthOfNonNested, ...getLengthArr(arr[i])];
    } else {
      lengthOfNonNested.push(arr[i]);
    }
  }
  return lengthOfNonNested;
}
console.log(getLengthArr([1, [2999, 878], 1, [9], 1]));
