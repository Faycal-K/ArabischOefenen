const arabicWords = [
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
const dutchWords = [
  "Rood", "Blauw", "groen", "Zwart", "geel", "Wit",
  "Baghdad", "Jeddah", "kom (object)", "minuut", "minuten", "sleutel", "sleutels", "zei (hij)", "zei (zij)",
  "Istanbul", "Washington", "Ta'if",
  "Elke", "Elk van hun", "Elke van jullie", "Elke van ons", "De land", "Verschillend", "De bus", "Van hen", "Europa", "Joegoslavië",
  "De dag", "De prijs", "De helft", "Oud", "De tas (zak)", "De passagier", "De vraag", "Het woord", "Woorden", "Tijdschrift", "Letter(s)",
  "Indonesië", "Kamer", "Les", "Oom",
  "Het rivier", "De zee", "De hotel", "De vliegtuig",
  "Het bedrijf", "De directeur van het bedrijf", "Goedkoop", "Japans", "Blouse/garment/shirt",
  "Het wiel", "Het feest", "Het raam", "Het jaar", "De wijk", "De liniaal", "De gebedsaanheid"
];

let randIndex = Math.floor(Math.random() * arabicWords.length);

const playGame = getAnswer = () =>{
  let answer = '';
  for(let i = 0; i < dutchWords.length; i++){
    answer = prompt(`What is ${dutchWords[randIndex]} in het Arabisch?`);
    if(answer === arabicWords[randIndex]){
      alert(`Correct!`);
    }else{
      alert(`Incorrect. The arabic word for ${dutchWords[randIndex]} is ${arabicWords[randIndex]}.`);
  }
  randIndex = Math.floor(Math.random() * arabicWords.length); //After the Q&A, generate a new word.
  }
  }
