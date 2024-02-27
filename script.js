const quoteElement = document.getElementById('quote');
const userInputElement = document.getElementById('user-input');
const speedElement = document.getElementById('speed');
const accuracyElement = document.getElementById('accuracy');

function calculateSpeedAndAccuracy() {
  const quoteText = quoteElement.innerText.trim().split(' ');
  const userInputText = userInputElement.value.trim().split(' ');
  const correctWords = userInputText.filter((word, index) => word === quoteText[index]).length;
  const totalWords = quoteText.length;
  // Calculates accuracy percentage
  const accuracyPercentage = (correctWords / totalWords) * 100;
  // Calculates words per minute
  const wordsPerMinute = Math.round((correctWords) / (timeElapsed / 60));
  speedElement.textContent = ` ${wordsPerMinute}`;
  accuracyElement.textContent = `${accuracyPercentage.toFixed(2)}%`;
}
let startTime, endTime, timeElapsed;
userInputElement.addEventListener('focus', () => {
  startTime = new Date().getTime();
});

userInputElement.addEventListener('blur', () => {
  endTime = new Date().getTime();
  timeElapsed = (endTime - startTime) / 1000; // in seconds

  // Calculates speed and accuracy when user finishes typing
  calculateSpeedAndAccuracy();
});
userInputElement.addEventListener('input', () => {
  if (!startTime) {
    startTime = new Date().getTime();
  }
  // Updates speed and accuracy in real-time as the user types
  calculateSpeedAndAccuracy();
});

