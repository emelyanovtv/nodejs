

// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let count = 0;
    let currElem = head;


    while (currElem.data) {
        if (count === position) {
            currElem.next = {
                data: currElem.data,
                next: currElem.next
            };
            currElem.data = data;

            break;
        }

        ++count;
        currElem = currElem.next;
    }

    return head;
};

