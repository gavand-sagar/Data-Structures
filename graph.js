class Graph {
    vertices = []
    edges = {}


    addVertex(value) {
        this.vertices.push(value);
        this.edges[value] = {}
    }

    addEdge(from, to) {
        this.edges[from][to] = 1
    }

    visited = []

    hasEdge(from, to) {
        if (this.visited.includes(from)) {
            return false
        }

        this.visited.push(from)

        if (this.edges[from][to] == 1) {
            return true;
        }



        let flag = false
        for (let e in this.edges[from]) {
            if (this.hasEdge(e, to)) {
                flag = true;
            }
        }

        return flag
    }

    displayAllEdges() {
        console.log(this.edges)
    }
}



let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E");

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("A", "D")

g.addEdge("B", "E")

g.addEdge("E", "B")
g.addEdge("E", "C")

g.displayAllEdges()

if (g.hasEdge("C", "E")) {
    console.log("Yess present")
} else {
    console.log("Not present")

}