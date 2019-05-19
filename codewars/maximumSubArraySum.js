var maxSequence = function(arr){
  let max = 0
  
  for (let i = 1; i < arr.length; i++) {
    let sum = arr[i]
    for (j = i + 1; j < arr.length; j++) {
      sum += arr[j]
      if (sum > max) max = sum
    } 
  }
  return max
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));