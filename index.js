function analyzeArray(arr) {
  let min = arr[0];
  let max = arr[0];
  let oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] % 2 !== 0) {
      oddCount++;
    }
  }

  console.log("Minimum: " + min);
  console.log("Maximum: " + max);
  console.log("Number of odd numbers: " + oddCount);
}
