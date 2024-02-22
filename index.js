const quoteElement = document.getElementById('quote');
const userInputElement = document.getElementById('user-input');
const speedElement = document.getElementById('speed');

function calculateSpeed() {
  const quoteText = quoteElement.innerText.trim().split(' ');
  const userInputText = userInputElement.value.trim().split(' ');

  const correctWords = userInputText.filter((word, index) => word === quoteText[index]).length;
  const wordsPerMinute = Math.round((correctWords ) / (timeElapsed / 60));

  speedElement.textContent = wordsPerMinute;
}

let startTime, endTime, timeElapsed;

userInputElement.addEventListener('focus', () => {
  startTime = new Date().getTime();
});

userInputElement.addEventListener('blur', () => {
  endTime = new Date().getTime();
  timeElapsed = (endTime - startTime) / 1000; // in seconds
});

userInputElement.addEventListener('input', () => {
  if (!startTime) {
    startTime = new Date().getTime();
  }
});
