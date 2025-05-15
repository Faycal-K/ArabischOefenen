const arabicWords = ["بَيْتٌ", "مَسْجِدٌ", "مِلْعَقَةٌ"];
const dutchWords = ["Huis", "Moskee", "Lepel"];

const randIndex = Math.floor(Math.random() * arabicWords.length);

console.log(dutchWords[randIndex]);

console.log(prompt("Do you see this?"));
