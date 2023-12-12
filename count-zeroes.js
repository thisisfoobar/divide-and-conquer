function countZeroes(arr) {
  let first = findZero(arr);

  if (first === -1) {
    return 0;
  } else {
    return arr.length - first;
  }
}

function findZero(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findZero(arr, mid + 1, high);
    }
    return findZero(arr, low, mid - 1);
  }
  return -1;
}

module.exports = countZeroes;
