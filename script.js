const arabicWords = [ //Arabische woorden
  "أَحْمَرَ", "أَزْرَقَ", "أَخْضَرَ", "أَسْوَدَ", "أَصْفَرَ", "أَبْيَضَ",
  "بَغْدَادُ", "جِدَّةُ", "كَوْنٌ", "دَقِيقَةٌ", "دَقَائِقُ", "مِفْتَاحٌ", "مَفَاتِيحُ", "قَالَ", "قَالَتْ",
  "إِصْطَنْبُولُ", "وَاشِنْطُنْ", "الطَّائِفُ",
  "كُلُّ", "كُلُّهُمْ", "كُلُّكُمْ", "كُلُّنَا", "ٱلْبَلَدُ", "مُخْتَلِفٌ", "ٱلْحَافِلَةُ", "مِنْهَا", "أُورُوبَّا", "يُوغُسْلَافِيَا",
  "ٱلْيَوْمُ", "ٱلثَّمَنُ", "ٱلنِّصْفُ", "قَدِيمٌ", "ٱلْحَقِيبَةُ", "ٱلرُّكَّابُ", "ٱلسُّؤَالُ", "كَلِمَةٌ", "كَلِمَاتٌ", "مَجَلَّةٌ", "حُرُوفٌ",
  "إِنْدُونِيسِيَا", "غُرْفَةٌ", "دَرْسٌ", "عَمٌّ",
  "ٱلنَّهْرُ", "ٱلْبَحْرُ", "ٱلْفُنْدُقُ", "ٱلطَّائِرَةُ",
  "ٱلشَّرِكَةُ", "مُدِيرُ ٱلشَّرِكَةِ", "رَخِيصٌ", "يَابَانِيَّةٌ", "قَمِيصٌ",
  "ٱلْعَجَلَةُ", "ٱلْحَفْلُ", "ٱلنَّافِذَةُ", "ٱلسَّنَةُ", "ٱلْحَيُّ", "ٱلْمِسْطَرَةُ", "ٱلرَّكْعَةُ"
];
const dutchWords = [ //Nederlandse woorden
  "Rood", "Blauw", "Groen", "Zwart", "Geel", "Wit",
  "Baghdad", "Jeddah", "Kom (object)", "Minuut", "Minuten", "Sleutel", "Sleutels", "Hij zei", "Zij zei",
  "Istanbul", "Washington", "Ta'if",
  "Elke", "Elke van hun", "Elke van jullie", "Elke van ons", "De land", "Verschillend", "De bus", "Van haar", "Europa", "Joegoslavië",
  "De dag", "De prijs", "De helft", "Oud", "De tas", "De passagier", "De vraag", "Het woord", "Woorden", "Tijdschrift", "Letters",
  "Indonesië", "Kamer", "Les", "Oom",
  "Het rivier", "De zee", "De hotel", "De vliegtuig",
  "Het bedrijf", "De directeur van het bedrijf", "Goedkoop", "Japans", "Blouse/garment/shirt",
  "Het wiel", "Het feest", "Het raam", "Het jaar", "De wijk", "De liniaal", "De gebedseenheid"
];

function generateNum() { //generate a random number
  return num = Math.floor(Math.random() * arabicWords.length);
  
} 
let randIndex = generateNum(); // Generate a random index
let totalWords = dutchWords.length;

function playGame() { //Game will be called via a button in the HTML file
  let answer = '';
  for(let i = 0; i < totalWords; i++){ //Iterate as much as the array length
    answer = prompt(`Wat is de vertaling van '${arabicWords[randIndex]}'?`); //Question the user
    if(answer.toLowerCase() === dutchWords[randIndex].toLowerCase()){ //Check answer
      alert(`Correct!`);
    } else{
      alert(`Incorrect. De vertaling van '${arabicWords[randIndex]}' is '${dutchWords[randIndex]}'.`);
  }
  randIndex = generateNum() //Generate another random number after each iteration
  }
  }

console.log(arabicWords[25])
