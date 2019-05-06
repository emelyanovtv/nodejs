const Node = require('./linked_list');

// Complete the deleteNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function deleteNode(head, position) {
    let count = 0;
    let currElem = head;


    while (currElem && currElem.data) {
        if (position === 0) {
            currElem.data = currElem.next.data;
            currElem.next = currElem.next.next;
            break;
        } else if (count === position - 1) {
            if (currElem.next && currElem.next.next && currElem.next.next.data) {
                currElem.next.data = currElem.next.next.data;
                currElem.next.next = currElem.next.next.next;
            } else {
                currElem.next = null;
            }


            break;
        }

        ++count;
        currElem = currElem.next;
    }

    return head;
};

const root = new Node(1);

root.appendToTail(123);
root.appendToTail(343);
root.appendToTail(987);

const newLinkedList = deleteNode(root, 1);

console.log(newLinkedList);

