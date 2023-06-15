// collection
// it has no index based access
// its gives you access to only single element (last position)
// insert happens on last position
// remove happens on last position
// LIFO

class Stack {
    #collection = []

    push(item) {
        this.#collection.push(item)
    }

    pop() {
        return this.#collection.pop();
    }

    top() {
        //last item from collection
        let lastIndex = this.#collection.length - 1;
        return this.#collection[lastIndex];
    }

    length(){
        return this.#collection.length;
    }

    isEmpty() {
        return this.#collection.length == 0
    }
}





/// push - add item at top
/// pop  - remove from top
/// top  - get item at top (no delete)
/// isEmpty() - true/false for empty

let s = new Stack();

s.push(6)
s.push(4)
s.push(9)

console.log(s.isEmpty()) //false

console.log(s.top()) // 9

console.log(s.length()) //3

console.log(s.pop())   //9

console.log(s.length()) //2

console.log(s.pop())   //4

console.log(s.length()) //1

console.log(s.pop())   //6

console.log(s.length()) //0

console.log(s.isEmpty()) //true




