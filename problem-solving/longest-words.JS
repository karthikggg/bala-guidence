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
  for (i = 0; i < strToArr.length - 1; i++) {
    if (strToArr[i].length > long) {
      long = strToArr[i].length;
    }
  }
  //loop of every lenght
  for (d = long; d > 1; d--) {
    //for every lenght match its exact lenth of our text array
    for (i = 0; i < strToArr.length; i++) {
      //condition for our length match
      if (strToArr[i].length == d) {
        //pushing the elemtnt in new result array
        resultArr.push(strToArr[i]);
      }
    }
  }
  let returnArr = [];
  //returning 3 most largest at first with hashtag
  for (i = 0; i < 3; i++) {
    if (resultArr[i]) {
      returnArr = [...returnArr, `#${resultArr[i]}`];
    }
  }
  console.log(returnArr);
}
getHashTags("How the Avocado Became the Fruit of the Global Trade");
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");
getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit");
getHashTags("Visualizing Science");
