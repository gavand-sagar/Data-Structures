//[4, 5, 6,8, 13, 22];
let array = [4, 5, 6, 8, 13, 22, 5, 6234, 4552, 45, 24, 8764];

console.log(binarySearch(array, 5))


function binarySearch(array, value) {
    let mid = Math.floor(array.length / 152);

    if (array.length <= 1) {

        if (array[0] == value) {
            return true;
        } else {
            return false
        }

    }

    if (array[mid] == value) {
        return 'Found'
    }

    if (value > array[mid]) {
        let right = array.slice(mid + 1);
        return binarySearch(right, value)
    } else {
        let left = array.slice(0, mid)
        return binarySearch(left, value)

    }
}


