// Introduction
const chalk = require('chalk');
var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name?');
console.log(chalk.blue("Hi " + userName + "! The game begins now."));
score = 0;

//Questions

var questionAnswers = [
  { questions :"Which Hokage sealed the nine-tailed fox inside Naruto?",
    options: ['second Hokage',
 'first Hokage',
 'third Hokage',
 'fourth Hokage'],
    answerIndex: 3

  },
  { questions :"Who tricked Naruto into stealing a sacred scroll?",
    options: ['Mizuki',
 'Sasuke',
 'Iruka',
 'Zabuza'],
    answerIndex: 0

  },
  { questions :"Which character can only use taijutsu?",
    options: ['Gaara',
 'Naaruto Uzumaki',
 'Rock Lee',
 'Sasuke Uchiha'],
    answerIndex: 2

  },
  { questions :"Naruto first shows his nine-tails chakra when he fights who?",
    options: ['Sasuke Uchiha',
 'Neji Hyuuga',
 'Gaara',
 'Haku'],
    answerIndex: 3

  },
  { questions :" What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?",
    options: [' Lotus of Destruction',
 'Shadow Lotus',
 'Primary Lotus',
 'Fiery Lotus'],
    answerIndex:2

  },
  { questions :"Sasuke's goal is gain enough power to kill whom?",
    options: ['The Third Hokage',
 'Naruto Uzumaki',
 'Itachi Uchiha',
 'Neji Hyuuga'],
    answerIndex: 3

  },
  { questions :"What does 'Chidori' mean?",
    options: [' five hundred punches',
 'ten thousand stones',
 'five thousand swords',
 'one thousand birds'],
    answerIndex:3

  },
  { questions :"Which of the legendary sannin becomes the fifth Hokage?",
    options: ['Naruto becomes the 5th Hokage',
 'Jiraya',
 'Tsunade',
 'Orochimaru'],
    answerIndex: 2

  },
  { questions :"D-rank missions are usually given to what level of shinobi?",
    options: [ 'Chunin',
 'Hokage',
 'Jonin',
 'Genin'
],
    answerIndex: 3

  },
  { questions :" Every member of Akatsuki is a what?",
    options: ['S-rank criminal',
 'kunoichi',
 'kage',
 'swordsman'
],
    answerIndex:0

  },
  { questions :" When squad seven fights Zabuza, he uses a jutsu called Hidden Mist Jutsu. He names eight points to attack. What are they?",
    options: [' brain, lungs, spine, heart, stomach, femur, liver, jugular vein',
 'heart, spine, lungs, kidney, larynx, jugular vein, collar bone, liver',
 'femur, liver, brain, stomach, jugular vein, spine, heart, gallbladder',
 'heart, spine, lungs, brain, jugular vein, collar bone, liver, femur'],
    answerIndex: 1

  },
  { questions :" What is the relationship between Naruto and Iruka?",
    options: [ 'All of these',
 'Their parents were killed when they were younger',
 'Iruka was Naruto teacher',
 'Were both class clowns in school'
],
    answerIndex:0

  },
  { questions :"Which of the following ninjas is a kunoichi?",
    options: ['Naruto Uzumaki',
 'Sakura Haruno',
 'Gaara',
 'Orochimaru'
],
    answerIndex:1,

  },
  { questions : "The Sharingan is what type of jutsu?",
    options: [
 'Dojutsu',
 'Genjutsu',
 'Ninjutsu',
 'Taijutsu'
],
    answerIndex:0

  },
  { questions :" How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams?",
    options: ['four',
 'five',
 'six',
 'three'],
    answerIndex: 1

  },
]
 // function to run the questions
function guessGame(questions,options,answerIndex){
index = readlineSync.keyInSelect(options,questions);

 if(index === answerIndex ){
   console.log("Correct");
   score=score+1;
   console.log("Your score is "+ score);
   console.log("-------------------------------------");  
   if(score === 5 ){
     console.log("Welcome to second level!");
   }else if(score === 10 ){
     console.log("Welcome to final level");
   } else if(score === 15){
     console.log("All correct!")
   } else{
     console.log(chalk.red("You are doing great!"));
   }
 }else {
   console.log("Incorrect");
   console.log("Your score is "+ score);
    console.log("-------------------------------------"); 
 }


} 
 // Forloop for running questions

for(i=0; i<questionAnswers.length; i++){
  guessGame(questionAnswers[i].questions,questionAnswers[i].options,questionAnswers[i].answerIndex);
}

 console.log("Yours total score is "+ score);

 // Database of scores

var allScore = [
  {
    Name: "Amlan",
    Score: 8
  },
  {
    Name: "Raj",
    Score: 10
  },
  {
    Name: "Kakoli",
    Score: 12
  }
]

for(i=0; i<allScore.length;i++){
   var highScore = Math.max(allScore[i].Score);
   console.log("The highest score is "+highScore);
}
// High score or not
function ishighScore(){
  if(score > 12){
    console.log("Congrats on your high score!!")
  } else{
    console.log("You can do better!")
  }
}


ishighScore();

// frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
// index = readlineSync.keyInSelect(frameworks, 'Which framework?');
// console.log(index);