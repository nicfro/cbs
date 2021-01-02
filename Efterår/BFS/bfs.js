class Node{
    constructor(){
        this.connections = new Map()
        this.attributes = new Map()
    }
}

class Graph{
    constructor(){
        this.nodes = new Node()
    }

    addNode(node){
        this.nodes.connections.set(node, [])
        this.nodes.attributes.set(node, [])
    }

    addNodeAttribute(node, attribute){
        this.nodes.attributes.get(node).push(attribute)
    }

    addEdge(source, destination){
        this.nodes.connections.get(source).push(destination)
        this.nodes.connections.get(destination).push(source)
    }

    breadthFirstSearch(startingNode){
        let visitedNodes = []
        let queue = []

        visitedNodes[startingNode] = true
        queue.push(startingNode)
        while (queue.length > 0){
            const currentNode = queue.shift()
            const connections = this.nodes.connections.get(currentNode)

            for (let node of connections){
                if (!visitedNodes[node]){
                    if (this.nodes.attributes.get(node) == "mango"){
                        return node
                    }
                    visitedNodes[node] = true
                    queue.push(node)
                }
            }
        }

        return "no mango sellers"
    }

    depthFirstSearchIterative(startingNode){
        let visitedNodes = []
        let stack = []

        visitedNodes[startingNode] = true
        stack.push(startingNode)

        while (stack.length > 0 ){
            const currentNode = stack.pop()
            const connections = this.nodes.connections.get(currentNode)

            for (let node of connections){
                if (!visitedNodes[node]){
                    if (this.nodes.attributes.get(currentNode) == "mango"){
                        return currentNode
                    }
                    visitedNodes[currentNode] = true
                    stack.push(node)
                }
            }
        }
        return "no mango sellers"
    }

    depthFirstSearchHelper(node, visitedNodes){
        visitedNodes[node] = true 

        const connections = this.nodes.connections.get(node)

        if (this.nodes.attributes.get(node) == "mango"){
            console.log(node, "sells mango")
        }

        for (let node of connections){
            if (!visitedNodes[node]){
                this.depthFirstSearchHelper(node, visitedNodes)
            }
        }
    }

    depthFirstSearchRecursive(startingNode){
        let visitedNodes = []
        this.depthFirstSearchHelper(startingNode, visitedNodes)
    }

    ShortestPathBFS(startingNode, endNode){
        let visitedNodes = []
        let queue = []

        let parents = {}
        visitedNodes[startingNode] = true
        queue.push(startingNode)
        while (queue.length > 0){
            const currentNode = queue.shift()
            const connections = this.nodes.connections.get(currentNode)

            for (let node of connections){
                if (!visitedNodes[node]){
                    visitedNodes[node] = true
                    parents[node] = currentNode
                    queue.push(node)
                    if (node == endNode){
                        return graph.backtrack(parents, startingNode, endNode)
                    }
                }
            }
        }

        return "No path exists"
    }

    backtrack(parents, startingNode, endNode){
        const path = [endNode]
        while(path[path.length -1 ] != startingNode){
            path.push(parents[path[path.length-1]])
        }
        return path.reverse()
    }
}

let graph = new Graph()

graph.addNode("Nicolai")
graph.addNode("Alice")
graph.addNode("Claire")
graph.addNode("Peggy")
graph.addNode("Bob")
graph.addNode("Anuj")
graph.addNode("Jonny")
graph.addNode("Thom")
graph.addNode("Hans")
graph.addNode("Holger")


graph.addNodeAttribute("Holger", "mango")
//graph.addNodeAttribute("Claire", "mango")

graph.addEdge("Nicolai", "Bob")
graph.addEdge("Nicolai", "Claire")
graph.addEdge("Nicolai", "Alice")
graph.addEdge("Alice", "Peggy")
graph.addEdge("Bob", "Peggy")
graph.addEdge("Bob", "Anuj")
graph.addEdge("Claire", "Thom")
graph.addEdge("Claire", "Jonny")
graph.addEdge("Anuj", "Hans")
graph.addEdge("Hans", "Holger")



console.log(graph.ShortestPathBFS("Nicolai", "Hans"))
