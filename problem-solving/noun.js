// Problem 3
// Given an array of strings (nouns), list them up in a complete sentence.

// Examples
// sentence(["orange", "apple", "pear"]) ➞ "An orange, an apple and a pear."

// sentence(["keyboard", "mouse"]) ➞ "A keyboard and a mouse."

// sentence(["car", "plane", "truck", "boat"]) ➞ "A car, a plane, a truck and a boat."
// Notes
// The sentence starts with a capital letter.
// Do not change the order of the words.
// A/An should be correct in all places.
// Put commas between nouns, except between the last two (there you put "and").
// The sentence ends with a .
// There are at least two nouns given.
// Every given word is lowercase.

function sentence(arr) {
  const vowels = ["a", "e", "i", "o", "u"];
  vowelsConvertedArr = [];
  let strResults = "";
  arr.map((m) => {
    if (m) {
      for (i = 0; i < vowels.length - 1; i++) {
        if (m[0] == vowels[i]) {
          vowelsConvertedArr.push(`an ${m}`);
          return;
        }
      }
      vowelsConvertedArr.push(`a ${m}`);
    }
  });

  vowelsConvertedArr.map((m, i) => {
    if (i == 0) {
      let upperCase = m.charAt(0).toUpperCase() + m.slice(1) + ", ";
      strResults = strResults + upperCase;
    }
    if (i != 0 && i != vowelsConvertedArr.length - 1) {
      strResults = strResults + m + ", ";
    }
    if (i == vowelsConvertedArr.length - 1) {
      
      strResults = strResults + "and " + m + ".";
    }
  });
  console.log(strResults);
}
sentence(["", "orange", "apple", "pear"]);
sentence(["keyboard", "mouse"])
sentence(["car", "plane", "truck", "boat"])
// An orange, an apple, and a pear.
// A keyboard, and a mouse.
// A car, a plane, a truck, and a boat.
