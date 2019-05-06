const Node = require('./linked_list');

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
    let result = null;
    const stack = [];

    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    // Set head to end of list.
    result = stack.pop() || [];
    current = result;

    while (current) {
        current.next = stack.pop() || null;
        current = current.next;
    }

    return result;
}

const root = new Node(1);

root.appendToTail(123);
root.appendToTail(343);

const reversedLinkedList = reverse(root);

console.log(reversedLinkedList);
