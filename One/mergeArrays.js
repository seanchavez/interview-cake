// function mergeSortedArrays(myArray, yourArray) {
//   const headOfMyArray = [0];
//   const headOfYourArray = [0];
//   if (headOfMyArray < headOfYourArray) {
//     mergedArray[0] = headOfMyArray;
//   } else {
//     mergedArray[0] = headOfYourArray;
//   }
//   return mergedArray;
// }

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
    currentIndexMerged++;
  }
  return mergedArray;
}
