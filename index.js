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
  const midpoint = array.length / 2;
  const leftArray = array.slice(0, midpoint);
  const rightArray = array.slice(midpoint, array.length);
  
  if (array.length === 0) {
    return array;
  } else {
    return merge(mergeSort(leftArray), mergeSort(rightArray))
  }
}
