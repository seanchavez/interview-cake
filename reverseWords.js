function reverseCharacters(message) {
  let leftIndex = 0;
  let rightIndex = message.length - 1;

  while (leftIndex < rightIndex) {
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}
