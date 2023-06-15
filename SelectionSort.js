let array = [20,31,4,15,6,78,23]

let sortedArray = selectionSort(array);

console.log(sortedArray)

function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {

        let smallestIndex = i + 1
        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
        }

        // current element is greater than the (smallest from the remaining)
        if (array[i] > array[smallestIndex]) {
            //swap
            let temp = array[i];
            array[i] = array[smallestIndex];
            array[smallestIndex] = temp;
        }
    }

    return array

}