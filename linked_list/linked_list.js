class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    appendToTail(data) {
        const end = new Node(data);
        let n = this;

        while (n.next != null) {
            n = n.next;
        }

        n.next = end;

        return this;
    }
}

module.exports = Node;
