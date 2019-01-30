function reverseCharacters(message, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    let temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

function reverseWords(message) {
  reverseCharacters(message, 0, message.length - 1);
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}
