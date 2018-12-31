function isSingleRiffle(half1, half2, shuffledDeck) {
  // base case
  if ((shuffledDeck.length = 0)) {
    return true;
  }

  if (half1.length && half1[0] === shuffledDeck[0]) {
    return isSingleRiffle(half1.slice(1), half2, shuffledDeck.slice(1));
  } else if (half2.length && half2[0] === shuffledDeck[0]) {
    return isSingleRiffle(half1, half2.slice(1), shuffledDeck.slice(1));
  } else {
    return false;
  }
}
