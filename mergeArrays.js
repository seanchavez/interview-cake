function mergeArrays(myArray, yourArray) {
  const mergedArray = [];

  let currentIndexYours = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < myArray.length + yourArray.length) {
    if (currentIndexMine >= myArray.length) {
      mergedArray[currentIndexMerged] = yourArray[currentIndexYours];
      currentIndexYours++;
    } else if (currentIndexYours >= yourArray.length) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;
    } else if (myArray[currentIndexMine] < yourArray[currentIndexYours]) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;
    } else {
      mergedArray[currentIndexMerged] = yourArray[currentIndexYours];
      currentIndexYours++;
    }
    // const firstUnmergedYours = yourArray[currentIndexYours];
    // const firstUnmergedMine = myArray[currentIndexMine];

    // if (firstUnmergedMine < firstUnmergedYours) {
    //   mergedArray[currentIndexMerged] = firstUnmergedMine;
    //   currentIndexMine++;
    // } else {
    //   mergedArray[currentIndexMerged] = firstUnmergedYours;
    //   currentIndexYours++;
    // }
    currentIndexMerged++;
  }

  return mergedArray;
}
