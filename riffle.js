// function isSingleRiffle(half1, half2, shuffledDeck) {
//   // base case
//   if ((shuffledDeck.length = 0)) {
//     return true;
//   }

//   if (half1.length && half1[0] === shuffledDeck[0]) {
//     return isSingleRiffle(half1.slice(1), half2, shuffledDeck.slice(1));
//   } else if (half2.length && half2[0] === shuffledDeck[0]) {
//     return isSingleRiffle(half1, half2.slice(1), shuffledDeck.slice(1));
//   } else {
//     return false;
//   }
// }

// function isSingleRiffle(
//   half1,
//   half2,
//   shuffledDeck,
//   shuffledDeckIndex,
//   half1Index,
//   half2Index,
// ) {
//   shuffledDeckIndex =
//     typeof shuffledDeckIndex !== 'undefined' ? shuffledDeckIndex : 0;
//   half1Index = typeof half1Index !== 'undefined' ? half1Index : 0;
//   half2Index = typeof half2Index !== 'undefined' ? half2Index : 0;

//   if (shuffleDeckIndex === shuffleDeck.length) {
//     return true;
//   }

//   if (
//     half1Index < half1.length &&
//     half1[half1Index] === shuffledDeck[shuffledDeckIndex]
//   ) {
//     half1Index++;
//   } else if (
//     half2index < half2.length &&
//     half2[half2Index] === shuffledDeck[shuffledDeckIndex]
//   ) {
//     half2Index++;
//   } else {
//     return false;
//   }

//   shuffledDeckIndex++;
//   return isSingleRiffle(
//     half1,
//     half2,
//     shuffleDeck,
//     shuffledDeckIndex,
//     half1Index,
//     half2Index,
//   );
// }

function isSingleRiffle(half1, half2, shuffleDeck) {
  let half1Index = 0;
  let half2Index = 0;

  for (i = 0; i < shuffleDeck.length; i++) {
    let card = shuffledDeck[i];

    if (half1Index < half1.length && card === half1[half1Index]) {
      half1Index++;
    } else if (half2Index < half2.length && card === half2[half2Index]) {
      half2Index++;
    } else {
      return false;
    }
  }
  return true;
}
