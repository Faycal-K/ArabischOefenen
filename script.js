const arabicWords = ["بَيْتٌ", "مَسْجِدٌ", "مِلْعَقَةٌ"];
const dutchWords = ["Huis", "Moskee", "Lepel"];

const randIndex = Math.floor(Math.random() * arabicWords.length);

const playGame = getAnswer = () =>{
  let answer = prompt(`What is ${dutchWords[randIndex]} in het Arabisch?`);
  if(answer === arabicWords[randIndex]){
    alert(`Correct!`);
  } else{
    alert(`Incorrect!`);
  }
}
