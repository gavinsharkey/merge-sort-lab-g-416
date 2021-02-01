function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(leftArray, rightArray) {
  const sorted = [];
  
  while (leftArray.length !== 0 && rightArray.length !== 0) {
    if (leftArray[0] < rightArray[0]) {
      sorted.push(findMinAndRemoveSorted(leftArray));
    } else {
      sorted.push(findMinAndRemoveSorted(rightArray));
    }
  }
  
  return sorted.concat(leftArray).concat(rightArray);
}

function mergeSort(array) {
  
}
