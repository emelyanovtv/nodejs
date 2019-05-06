const Node = require('./linked_list');

function findElementFromEnd(root = {}, pos = 0) {
    if (!Object.keys(root).length) return root;
    if (pos <= 0) return root;

    let offsetElem = root;

    for (let i = 0; i < pos; i++) {
        if (offsetElem.next) {
            offsetElem = offsetElem.next;
        } else { offsetElem = null; break; }
    }

    if (offsetElem === null) return null; // or throw error

    let returnElem = root;

    while (offsetElem && offsetElem.data) {
        offsetElem = offsetElem.next;
        returnElem = returnElem.next;
    }

    return returnElem;
}

const root = new Node(1);

root.appendToTail(2);
root.appendToTail(3);
root.appendToTail(4);
root.appendToTail(5);

const kElement = findElementFromEnd(root, 1);

console.log(kElement);
