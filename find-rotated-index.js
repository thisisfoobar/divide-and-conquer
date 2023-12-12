function findRotatedIndex(arr, num) {
  pivot = findPivot(arr);
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return findIndex(arr, 0, pivot - 1, num);
  } else {
    return findIndex(arr, pivot, arr.length - 1, num);
  }
}

function findIndex(arr, start, end, num) {
  if (arr.length === 0) return -1;
  if (num < arr[start] && num > arr[end]) return -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[low] <= mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}

module.exports = findRotatedIndex;
