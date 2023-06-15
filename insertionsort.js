let array = [3,4,6,7,2,8,9]

let sortedArray = inserionSort(array);

console.log(sortedArray)


function inserionSort(array) {
    //
    for (let index = 1; index < array.length; index++) {
        let temp = array[index];
        let flag = false
        for (let j = index - 1; j >= 0; j--) {
            if (temp < array[j]) {
                //shift the item to right;
                array[j + 1] = array[j]
            } else {
                array[j + 1] = temp;
                flag = true;
                break;
            }
        }
        if (flag == false) {
            array[0] = temp;
        }

    }
    return array

}