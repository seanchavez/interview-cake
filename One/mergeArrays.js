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
    if (
      currentIndexYours >= yourArray.length ||
      myArray[currentIndexMine] < yourArray[currentIndexYours]
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

const myArray = [3, 4, 6, 10, 11, 15];
const yourArray = [1, 5, 8, 12, 14];

console.log(mergeArrays(myArray, yourArray));
