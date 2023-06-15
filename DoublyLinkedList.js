class Point {
    prev;
    value;
    next;
    constructor(v, n, p) {
        this.value = v;
        this.next = n;
        this.prev = p;
    }
}


class LinkedList {
    #head = null;
    #rear = null;
    #length = 0

    getValueAt(index) {
        let obj = getWholeObjectAt(index)
        if (obj) {
            return obj.value
        }
    }

    getWholeObjectAt(index) {
        if (index == 0) {
            return this.#head;
        }
        if (index == this.length() - 1) {
            return this.#rear
        }

        //
        if (index <= Math.floor(this.length() / 2)) {
            let counter = 0;
            let temp = this.#head;
            while (temp) {
                if (counter == index) {
                    return temp;
                }
                counter++;
                temp = temp.next
            }
        } else {
            let counter = this.length() - 1;
            let temp = this.#rear;
            while (temp) {
                if (counter == index) {
                    return temp;
                }
                counter--;
                temp = temp.prev
            }
        }
    }

    insertAt(index, value) {

        if (this.length() == 0 && index == 0) {
            this.#head = new Point(value, null, null)
            this.#rear = this.#head;
            this.#length++
            return;
        }

        if (index == 0) {
            this.#head = new Point(value, this.#head, null);
            this.#length++;
            return;
        }

        if (index == this.length()) {
            let newNode = new Point(value, null, this.#rear)
            let temp = this.#rear;
            this.#rear = newNode;
            temp.next = newNode;
            this.#length++;
            return;
        }


        let prevObj = this.getWholeObjectAt(index - 1)
        let nextObj = this.getWholeObjectAt(index)

        let newObj = new Point(value);

        prevObj.next = newObj;
        nextObj.prev = newObj;

        newObj.next = nextObj;
        newObj.prev = prevObj;

        this.#length++


    }

    removeAt(index) {

        if (this.#length == 0) {
            return;
        }

        if (index == 0 && this.#length == 1) {
            this.#head = null;
            this.#rear = null;
            this.#length--
            return;
        }

        if (index == 1 && this.#length == 2) {
            this.#head.next = null;
            this.#rear = this.#head;
            this.#length--;
            return;
        }

        if (index == 0 && this.#length == 2) {
            this.#head = this.#rear;
            this.#head.prev = null;
            this.#head.next = null;
            this.#rear = this.#head;
            this.#length--;
            return;
        }


        let prevObj = this.getWholeObjectAt(index - 1)
        let nextObj = this.getWholeObjectAt(index + 1)
        prevObj.next = nextObj;
        nextObj.prev = prevObj
        this.#length--;

    }

    isEmpty() {
        return this.#head == null
    }

    length() {
        return this.#length
    }

    display() {
        let temp = this.#head;
        while (temp != null) {
            console.log(temp.value)
            temp = temp.next;
        }
    }

}



let list = new LinkedList();

list.insertAt(0, "Sagar")
list.insertAt(0, "Rahul")
list.insertAt(0, "Amit")


list.insertAt(3, "John")
list.insertAt(3, "Jack")



list.display(); // Amit , Rahul , Sagar, Jack , John

console.log('--------------')
console.log('--------------')

list.removeAt(2)
list.display(); // Amit , Rahul , Jack , John
