// it is a collection
// insert and remove operations allowed here
// insert happens at rear position (enqueue)
// remove happens at the front     (dequeue)
// front() // item at the front (no delete)
// length()
// isEmpty()

//QUEUE
//FIFO

class Queue{
    #collection = []

    enqueue(item){
        this.#collection.push(item)
    }

    dequeue(){
        return this.#collection.shift();
    }

    front(){
        return this.#collection[0]
    }

    isEmpty(){
        return this.#collection.length == 0
    }

    length(){
        return this.#collection.length;
    }
}








let q = new Queue();

console.log(q.isEmpty())  // true

q.enqueue("Sagar")  // push
q.enqueue("Rahul")  // push
q.enqueue("Amit")   // push

console.log(q.front())   // Sagar
q.enqueue("Jay") 
console.log(q.front())   // Sagar
console.log(q.isEmpty())  // false

console.log(q.dequeue()) // Sagar
console.log(q.front())   // Rahul

console.log(q.dequeue())  // Rahul
console.log(q.front())    // Amit

console.log(q.dequeue())   // Amit
console.log(q.dequeue())   // Jay
console.log(q.isEmpty())  // true


