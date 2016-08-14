var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var output = document.getElementById("planets");

// Use the forEach method to add the name of each planet to a div element in your HTML with an id of 'planets'.

var display = planets.forEach(function(planet) { /*function(planet) is the callback function*/
console.log("Use the forEach method to add the name of each planet to a div element in your HTML with an id of 'planets': ", planet);

output.innerHTML += planet + " ";
})

// Use the map method to create a new array where the first letter of each planet is capitalized

var firstLetterCaps = planets.map(function(caps) {
  return caps.charAt(0).toUpperCase() + caps.slice(1);
})
console.log("Use the map method to create a new array where the first letter of each planet is capitalized: ",firstLetterCaps)

// Use the filter method to create a new array that contains planets with the letter 'e'
function itemsWithE (array, index) {
  if(array.indexOf("e") !== -1) {
    return array
  }
}
var newArray = planets.filter(itemsWithE);
console.log("Use the filter method to create a new array that contains planets with the letter 'e'", newArray)

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function buildSentence (wordsBefore, wordsAfter, index, array) {
  return wordsBefore + " " + wordsAfter;
}

var sentence = words.reduce(buildSentence)
console.log("Use the reduce method to create a sentence from the words in the following array: ", sentence)




