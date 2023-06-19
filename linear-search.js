// [4,5,6,8,3,2,76,32]

// input - 8 ? 

let array = [4, 5, 6, 8, 3, 2, 76, 32];

if (linearSearch(array, 678)) {
    console.log("found")
} else {
    console.log("not found")
}


function linearSearch(array, value) {
    for (const iterator of array) {
        if (iterator == value) {
            return true;
        }
    }

    return false
}