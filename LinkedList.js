class Point {
    value;
    next;
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
}


class LinkedList {
    #head = null;

    getValueAt(index) {
        let counter = 0;
        let temp = this.#head;
        while (temp != null) {

            if (index == counter) {
                return temp.value;
            }

            temp = temp.next;
            counter++
        }
        return null
    }

    getWholeObjectAt(index) {
        let counter = 0;
        let temp = this.#head;
        while (temp != null) {
            if (index == counter) {
                return temp;
            }
            temp = temp.next;
            counter++
        }
        return null
    }

    insertAt(index, value) {

        if (index == 0 && this.isEmpty()) {
            this.#head = new Point(value, null);
            return;
        }

        if (index == 0) {
            this.#head = new Point(value, this.#head);
            return;
        }

        if (index > this.length() + 1) {
            throw 'Cannot Insert after last Item'
        }

        let oldItem = this.getWholeObjectAt(index)
        let previousItem = this.getWholeObjectAt(index - 1)
        previousItem.next = new Point(value, oldItem)

    }

    removeAt(index) {

        if (index >= this.length() || index < 0) {
            throw "Cannot remove from outside of bounds"
        }

        if (index == 0) {
            this.#head = this.#head.next
            return;
        }

        let currentElement = this.getWholeObjectAt(index)
        let previousItem = this.getWholeObjectAt(index - 1)
        previousItem.next = currentElement.next;
    }

    isEmpty() {
        return this.#head == null
    }

    length() {
        let counter = 0;
        let temp = this.#head;
        while (temp != null) {
            temp = temp.next;
            counter++
        }
        return counter;
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

// list.display(); // Amit , Rahul , Sagar

list.insertAt(3, "John")

list.removeAt(2)

list.display(); // Amit , Rahul , John