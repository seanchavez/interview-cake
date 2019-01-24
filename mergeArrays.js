function mergeArrays(myArray, yourArray) {
  const mergedArray = [];

  let currentIndexYours = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < myArray.length + yourArray.length) {
    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isYourArrayExhausted = currentIndexYours >= yourArray.length;

    if (
      !isMyArrayExhausted &&
      (isYourArrayExhausted ||
        myArray[currentIndexMine] < yourArray[currentIndexYours])
    ) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;
    } else {
      mergedArray[currentIndexMerged] = yourArray[currentIndexYours];
      currentIndexYours++;
    }
    currentIndexMerged++;
  }
  return mergedArray;
}
