function mergeSort(array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const leftSide = array.slice(0, mid);
  const rightSide = array.slice(mid);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftSide, rightSide) {
  const mergedArray = [];
  while (leftSide.length && rightSide.length) {
    if (leftSide[0] <= rightSide[0]) {
      mergedArray.push(leftSide.shift());
    } else {
      mergedArray.push(rightSide.shift());
    }
  }
  return [...mergedArray, ...leftSide, ...rightSide];
}
