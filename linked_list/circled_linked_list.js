const Node = require('./linked_list');

function isCircled(root = {}) {
    if (!Object.keys(root).length) return root;

    let curr = root;
    let fastCurr = root;

    while(curr.next !== null) {
        if(curr.data === fastCurr.data) { return true; break; }

        curr = curr.next;
        fastCurr = (curr.next || {}).next || null;
    }

    return false;
}

const root = new Node(1);

const node = root.appendToTail(2);
root.appendToTail(3);
root.appendToTail(4);
root.appendToTail(node);


console.log(isCircled(root));

const root2 = new Node(1)

root.appendToTail(2);
root.appendToTail(3);
root.appendToTail(4);
root.appendToTail(5);


console.log(isCircled(root2));
