function mergeArrays(myArray, yourArray) {
  const mergedArray = [];
  const headOfMyArray = myArray[0];
  const headOfYourArray = yourArray[0];

  if (headOfMyArray < headOfYourArray) {
    mergedArray[0] = headOfMyArray;
  } else {
    mergedArray[0] = headOfYourArray;
  }

  return mergedArray;
}
