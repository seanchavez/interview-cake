const maxSequence = function(arr){
  let maxSum = 0
  
  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i]
    for (j = i + 1; j < arr.length; j++) {
      sum += arr[j]
      if (sum > maxSum) maxSum = sum
    } 
  }
  return (maxSum > 0 ? maxSum : 0)
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));



function wave(str){
  const results = []
  for (let i = 0; i < str.length; i++) {
    const strArr = str.split('')
    if (strArr[i] === ' ') continue
    strArr[i] = strArr[i].toUpperCase()
    results.push(strArr.join(''))
  }
  return results
}