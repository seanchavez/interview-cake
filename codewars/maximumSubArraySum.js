const maxSequence = function(arr) {
  let maxSum = 0;

  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i];
    for (j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum > 0 ? maxSum : 0;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function wave(str) {
  const results = [];
  for (let i = 0; i < str.length; i++) {
    const strArr = str.split("");
    if (strArr[i] === " ") continue;
    strArr[i] = strArr[i].toUpperCase();
    results.push(strArr.join(""));
  }
  return results;
}

// function diamond(n){
//   if (n % 2 === 0 || n < 0) return null
//   return makeTopOrBottomRow(n - 2).concat(makeMiddleRow(n), makeTopOrBottomRow(n - 2))
//  }

//   function makeTopOrBottomRow(n) {
//     const row = []
//     for (i = 0; i < n + 2; i++) {
//       if (i === 0) {
//         row.push(' ')
//       } else if (i === n + 1) {
//         row.push('\n')
//       } else {
//         row.push('*')
//       }
//     }
//     return row.join('')
//   }

//   function makeMiddleRow(n) {
//     const row = []
//     for (i = 0; i < n + 1; i++) {
//       if (i === n ) {
//         row.push('\n')
//       } else {
//         row.push('*')
//       }
//     }
//     return row.join('')
//   }

function diamond(n) {
  if (n % 2 === 0 || n < 0) return null;
  let diamond = "*";
  let padding = (n - 1) / 2;
  let count = 1;

  while (count <= n) {
    //console.log('fuck')
    diamond =
      diamond.repeat(count) +
      diamond.padStart(padding) +
      diamond.padEnd(padding) +
      "\n";
    count++;
    // diamond += '\n'
  }

  //for (i = 0; i < n; i + 2) {
  //   //diamond += diamond.padStart(padding)
  //   diamond += diamond.repeat(i)
  //   //diamond += diamond.padEnd(padding)
  //   padding--

  //   // for(j = 1; j < n; j++) {
  //   //   // if (j === Math.floor(n / 2)) {
  //   //   //   diamond += '*'
  //   //   // }
  //   // }
  //   diamond += '\n'
  // }
  return diamond;
}

console.log(diamond(3));
//console.log(makeTopOrBottomRow(1))
//console.log(makeMiddleRow(3))
