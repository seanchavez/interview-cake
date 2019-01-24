function mergeArrays(myArray, yourArray) {
  const mergedArray = [];

  let currentIndexYours = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < myArray.length + yourArray.length) {
    const firstUnmergedYours = yourArray[currentIndexYours];
    const firstUnmergedMine = myArray[currentIndexMine];

    if (firstUnmergedMine < firstUnmergedYours) {
      mergedArray[currentIndexMerged] = firstUnmergedMine;
      currentIndexMine++;
    } else {
      mergedArray[currentIndexMerged] = firstUnmergedYours;
      currentIndexYours++;
    }
    currentIndexMerged++;
  }

  // const headOfMyArray = myArray[0];
  // const headOfYourArray = yourArray[0];

  // if (headOfMyArray < headOfYourArray) {
  //   mergedArray[0] = headOfMyArray;
  // } else {
  //   mergedArray[0] = headOfYourArray;
  // }

  return mergedArray;
}
