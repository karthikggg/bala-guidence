// Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.

// isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
// // 1, 2, 3 appear consecutively

// isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
// // 9, 8, 7, 6 appear consecutively

// isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
// // No consecutive numbers appear

// isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
// // No consecutive numbers appear
// Notes
// Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
// You will get numbers from 1-10.

function isshuffledSufficiently(arr) {
  let cmp = [];
  for (i = 0; i < arr.length - 1; i++) {
    // array.push(element1, element2, ..., elementN);
    cmp.push(Math.abs(arr[i] - arr[i + 1]));
  }
  for (i = 0; i < cmp.length; i++) {
    if (cmp[i] == cmp[i + 1]) {
      if (cmp[i] != 2) {
        console.log(
          "false     " + arr[i],
          arr[i + 1],
          arr[i + 2] + " - are sequence"
        );
        return;
      }
    }
  }
  console.log("true - everyting shuffled sufficiently");
}

isshuffledSufficiently([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]);
// false     1 2 3 - are sequence
isshuffledSufficiently([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]);
//false     9 8 7 - are sequence
isshuffledSufficiently([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]);
//true - everyting shuffled sufficiently
isshuffledSufficiently([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]);
//true - everyting shuffled sufficiently
