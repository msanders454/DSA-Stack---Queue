class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {

        if (this.top === null) {
            this.top = new Node(data, null);
            return this.top;
        }

        const node = new Node(data, this.top);
        this.top = node;

    }

    pop() {

        const node = this.top;
        this.top = node.next;
        return node.data;

    }
}

module.exports = Stack;