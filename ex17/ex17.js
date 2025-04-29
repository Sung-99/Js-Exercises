function countCorrectAnswers(teaType, answers) {
  let correctCount = 0;
  
  // Check each contestant's answer
  for (let i = 0; i < answers.length; i++) {
      if (answers[i] === teaType) {
          correctCount++;
      }
  }
  
  return correctCount;
}

// Example input
const teaType = Math.floor((Math.random() * 4) + 1); // Actual tea type
var answers = [4]; // Contestants' answers
for (let i = 0; i <= 4; i++) {
answers[i] = Math.floor((Math.random() * 4) + 1);
}
const result = countCorrectAnswers(teaType, answers);
console.log(result); // Output the number of correct answers
console.log(answers);
console.log(teaType);