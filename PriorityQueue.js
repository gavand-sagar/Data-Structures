function insertAt(array, index, element) {
    if (array.length == 0) {
        return array;
    }
    if (index == array.length) {
        array.push(element)
        return array;
    }
    if (index == 0) {
        array.unshift(element)
        return array
    }

    let left = array.slice(0, index);
    let right = array.slice(index)

    return [...left, element, ...right]
}

class PriorityQueue {
    #collection = []

    enqueue(item, priority) {
        let obj = { value: item, priority };
        for (let i = this.#collection.length - 1; i >= 0; i--) {
            const element = this.#collection[i];
            if (element.priority >= priority) {
                this.#collection = insertAt(this.#collection, i + 1, obj)
                return;
            }
        }

        // insert at 0th position
        this.#collection.unshift(obj)

    }

    dequeue() {
        let s = this.#collection.shift();
        return s.value;
    }

    front() {
        return this.#collection[0].value
    }

    isEmpty() {
        return this.#collection.length == 0
    }

    length() {
        return this.#collection.length
    }
}






//
let pq = new PriorityQueue();
pq.enqueue("Sagar", 1)
pq.enqueue("Rahul", 1)
pq.enqueue("Amit", 1)
pq.enqueue("Jay", 2)
pq.enqueue("Jack", 2)

console.log(pq.dequeue()) // Jay
console.log(pq.dequeue()) // Jack
console.log(pq.dequeue()) // Sagar
console.log(pq.dequeue()) // Rahul
console.log(pq.dequeue()) // Amit