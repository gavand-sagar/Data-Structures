// it is a collection
// it contains distinct values only
// we can add new elements in a Set but if it is already present it will not get added.

class MySet {
    #allitems = []  // this is a private variable

    add(item) {
        if (this.#allitems.includes(item) == false) {
            this.#allitems.push(item);
        }
    }

    length() {
        return this.#allitems.length;
    }

    entries() {
        return [...this.#allitems]; // to create a copy of #allitems
    }
}

// Test Driven Development
let s = new MySet();
s.add(4)
s.add(5)
s.add(6)
s.add(4)

s.entries().push(6)

console.log(s.length())  //3 
console.log(s.entries())  // [4,5,6]
