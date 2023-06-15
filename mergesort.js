let array = [30, 10, 2, 5, 25, 18, 23]
console.log(mergeSort(array))

function merge(arr1, arr2) {
    let temp = []
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            temp.push(arr1.shift())
        } else {
            temp.push(arr2.shift())
        }
    }
    if (arr1.length) {
        temp = temp.concat(arr1)
    }
    if (arr2.length) {
        temp = temp.concat(arr2)
    }
    return temp;
}


function mergeSort(array) {

    if (array.length <= 1) {
        return array
    }
    // divide main array into two parts
    let midIndex = Math.floor(array.length / 2);
    let leftArray = array.slice(0, midIndex);
    let right = array.slice(midIndex)

    //merge both of them

    return merge(mergeSort(leftArray), mergeSort(right))
}

