// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1
// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1
// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0

function oddishOrEvenish(arg) {
  if (!arg) {
    return "kindly provide value to find od or even";
  }
  let sumOfValue = 0;
  for (i = 0; i < arg.toString().length; i++) {
    sumOfValue += arg.toString()[i] * 1;
  }
  if (sumOfValue % 2 == 0) {
    return `given number ${arg} added to ${sumOfValue} which is EVEN!!`;
  } else {
    return `given number ${arg} added to ${sumOfValue} which is ODD!!`;
  }
}
console.log(oddishOrEvenish(111));
