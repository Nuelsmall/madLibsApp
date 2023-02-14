"use strict"
// Total Number of Questiion
let totalQuestion = 8;

// Counter to tell the current question
let guessCounter = 0;

let questionPrefix = `Please enter `;
// Test Questions/Logic
let questionToAsk =  [
  `${questionPrefix} name of our saviour`,
  `${questionPrefix} also known as what`,
  `${questionPrefix} His mother name is what `,
  `${questionPrefix} which city was he born`,
  `${questionPrefix} under which tribe`,
  `${questionPrefix} the act of delivering a child`,
  `${questionPrefix} an educated person`,
  `${questionPrefix} something influnce by the holy spirit`,
  `${questionPrefix} The message of christ`,
]
// Arranging the array in proper order
questionToAsk.reverse();

const userInputs = [];
for (let i = totalQuestion; i >= 0; i-- ) {
  console.log(questionToAsk[i]);


  let userResponse = prompt(questionToAsk[i]);

  userInputs.push(userResponse)
}
// Story of the Birth of Jesus Christ
let origninalStory = `The birth of ${userInputs[0]} or birth of ${userInputs[1]} is described in the biblical ${userInputs[8]} of Luke 
 and Matthew. The two accounts agree that Jesus was born in ${userInputs[3]} in ${userInputs[4]}, 
 his mother ${userInputs[2]} was engaged to a man named Joseph, 
 who was descended from King David and was not his biological father,
 and that his ${userInputs[5]} was caused by ${userInputs[7]} intervention. Many modern ${userInputs[6]} consider the ${questionToAsk[5]} narratives unhistorical because 
 they are laced with theology and present two different accounts which cannot be harmonised into a single coherent narrative. 
 But many others view the discussion of historicity as secondary,
 given that gospels were primarily written as theological documents rather than chronological timelines.`

console.log(origninalStory)

document.write(origninalStory)

alert('All done! Ready for your story of the Birth of Jesus Christ...')

// const questionToAsk = ["Jesus", "Christ", "Mary", "Bethlehem", "Judaea", "Birth", "Scholars", "Divine", "Gospels"] 









//  let origninalStory = `he nativity of Jesus, nativity of Christ,
//  birth of Jesus or birth of Christ is described in the biblical gospels of Luke 
//  and Matthew. The two accounts agree that Jesus was born in Bethlehem in Judaea, 
//  his mother Mary was engaged to a man named Joseph, 
//  who was descended from King David and was not his biological father,
//  and that his birth was caused by divine intervention. Many modern scholars consider the birth narratives unhistorical because 
//  they are laced with theology and present two different accounts which cannot be harmonised into a single coherent narrative. 
//  But many others view the discussion of historicity as secondary,
//  given that gospels were primarily written as theological documents rather than chronological timelines.`

