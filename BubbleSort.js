let array = [45, 12, 54, 4, 8, 93, 24]

let sortedArray = bubbleSort(array);

console.log(sortedArray)


function bubbleSort(array) {
    //
    for (let j = 0; j < array.length; j++) {

        for (let i = 0; i < (array.length - 1); i++) {
            if (array[i] > array[i + 1]) {
                //swap
                let temp = array[i];
                array[i] = array[i + 1]
                array[i + 1] = temp;
            }

        }
    }
    return array

}