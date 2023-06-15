// collection
// it has no index based access
// its gives you access to only single element (last position)
// insert happens on last position
// remove happens on last position
// LIFO

class Item {
    value;
    prev;
    constructor(v, p) {
        this.value = v;
        this.prev = p;
    }
}

class Stack {

    #item = null;
    #len = 0;

    push(value) {
        let currenttop = this.#item;
        let newItem = new Item(value,currenttop);
        this.#item = newItem

        this.#len++
        // this.item = new Item(value,this.item);
    }

    pop() {
        let temp = this.#item.value
        this.#item = this.#item.prev;
        this.#len--;
        return temp
    }

    top() {
        return this.#item.value;
    }

    length() {
        return this.#len
    }

    isEmpty() {
        return this.#item == null
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




