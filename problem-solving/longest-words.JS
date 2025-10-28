// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// ➞ ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// ➞ ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// ➞ ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// ➞ ["#visualizing", "#science"]

function getHashTags(str) {
  let strToArr = str.split(" ");
  console.log();
  let long = 0;
  let resultArr = [];
  //finding largest lenght here
  for (i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length > long) {
      long = strToArr[i].length;
    }
  }
  //loop of every lenght
  for (d = long; d > 1; d--) {
    strToArr.map((m) => {
      if (resultArr.length > 2) {
        return;
      }
      if (m.length == d) {
        resultArr.push(`#${m}`);
      }
    });
  }
  return resultArr;
}
console.log(
  getHashTags("How the Avocado Became the Fruit of the Global Trade")
);

console.log(
  getHashTags(
    "Why You Will Probably Pay More for Your Christmas Tree This Year"
  )
);

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));

console.log(getHashTags("Visualizing Science"));

// [ '#Avocado', '#Became', '#Global' ]

// [ '#Christmas', '#Probably', '#Will' ]

// [ '#Surprise,', '#Parents,', '#Fruit' ]

// [ '#Visualizing', '#Science' ]
