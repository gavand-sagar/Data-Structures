class Point {
    value;
    childrens = [];

    constructor(_value) {
        this.value = _value
    }

    addChildren(_value) {
        this.childrens.push(new Point(_value))
    }
}


class Tree {

    #root = null
    constructor(root) {
        this.#root = new Point(root)
    }

    addNode(value, parent) {
        this.addPointHelper(this.#root, parent, value)
    }

    addPointHelper(point, nameOfParent, nameOfNewItem) {
        if (point.value == nameOfParent) {
            point.addChildren(nameOfNewItem)
            return;
        }
        for (const child of point.childrens) {
            this.addPointHelper(child, nameOfParent, nameOfNewItem)
        }
    }

    displayAll() {
        this.showPoint(this.#root, 0)
    }

    showPoint(point, level) {
        console.log("   ".repeat(level) + "- " + point.value)
        for (const child of point.childrens) {
            this.showPoint(child, level + 1)
        }
    }
}



let t = new Tree("data-structures");
t.addNode("linear", "data-structures")
t.addNode("non-linear", "data-structures")

t.addNode("graph", "non-linear")
t.addNode("tree", "non-linear")

t.addNode("binary-tree", "tree")


t.addNode("array", "linear")
t.addNode("stack", "linear")
t.addNode("queue", "linear")
t.addNode("linked-list", "linear")


t.addNode("priority-queue", "queue")

t.addNode("singly", "linked-list")
t.addNode("doubly", "linked-list")


t.displayAll()