function sortedFrequency(arr,val) {
    let first = findFirst(arr,val)
    if (first === -1) return first
    let last = findLast(arr,val)
    return last - first + 1
}

function findFirst(arr, val, lowIdx = 0, highIdx = arr.length - 1){
    if (highIdx >= lowIdx){
        let midIdx = Math.floor((lowIdx + highIdx) / 2)
        let midVal = arr[midIdx]

        if((midIdx === 0 || val > arr[midIdx - 1]) && midVal === val) {
            return midIdx
        } else if(val > midVal){
            return findFirst(arr,val,midIdx + 1,highIdx)
        } else{
            return findFirst(arr,val,lowIdx,midIdx - 1)
        }
    }
    return -1
}

function findLast(arr, val, lowIdx = 0, highIdx = arr.length - 1){
    if (highIdx >= lowIdx){
        let midIdx = Math.floor((lowIdx + highIdx) / 2)
        let midVal = arr[midIdx]

        if((midIdx === arr.length - 1 || val < arr[midIdx + 1]) && midVal === val) {
            return midIdx
        } else if(val < midVal){
            return findLast(arr,val,lowIdx,midIdx - 1)
        } else 
            return findLast(arr,val,midIdx + 1,highIdx)
        }
    return -1
}

module.exports = sortedFrequency