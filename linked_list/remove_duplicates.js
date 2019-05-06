const Node = require('./linked_list');

function removeDuplicates(root = {}) {
    if(!Object.keys(root).length) return root;

    const hash = {};

    let current = root;
    let prev = null;

    while(current.next !== null) {
        const data = current.data;

        if(!hash[data]) {
            prev = current;
            current = current.next;

            hash[data] = true;

            continue;
        }

        if(current.next && current.next.next) {
            prev.next = current.next;
        } else {
            prev.next = null;
        }

        current = current.next;
    }

    return root;
}

const root = new Node(1);

root.appendToTail(1);
root.appendToTail(1);
root.appendToTail(2);
root.appendToTail(2);
root.appendToTail(2);
root.appendToTail(1);
root.appendToTail(2);
root.appendToTail(3);
root.appendToTail(4);
root.appendToTail(4);
root.appendToTail(3);
root.appendToTail(2);
root.appendToTail(1);

const reversedLinkedList = removeDuplicates(root);

console.log(JSON.stringify(reversedLinkedList));
