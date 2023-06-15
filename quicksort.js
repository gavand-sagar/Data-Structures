let array = [7, 6, 9, 3, 6, 2, 5, 10, 25, 23, 45, 90]

console.log(quickSort(array))

function quickSort(array) {

    if (array.length <= 1) {
        return array
    }

    let pivot = array.shift();
    let smallers = [];
    let greaters = []
    for (const item of array) {
        if (item < pivot) {
            smallers.push(item)
        } else {
            greaters.push(item)
        }
    }
    return quickSort(smallers).concat([pivot]).concat(quickSort(greaters))
}