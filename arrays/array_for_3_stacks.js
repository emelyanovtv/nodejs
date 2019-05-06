'use strict';

class StackArray {
    constructor(size = 100, stacksCnt = 3) {
        this.size = size;
        this.stacks = new Array(stacksCnt * size);
        this.Cnts = {};
        for (let i = 1; i <= stacksCnt; i++) {
            this.Cnts[`stack-${i}`] = 0;
        }
    }

    pushToStack(stackNum, value) {
        const currLength = this.Cnts[`stack-${stackNum}`];

        if (currLength >= this.size) throw new Error(`stack with number ${stackNum} is full!`);

        const pushIndex = (stackNum - 1) * this.size + currLength;

        this.stacks[pushIndex] = value;
        this.Cnts[`stack-${stackNum}`]++;
    };

    peekFromStack(stackNum) {
        const currLength = this.Cnts[`stack-${stackNum}`];

        if (currLength <= 0) throw new Error(`stack with number ${stackNum} is empty!`);

        const peekIndex = (stackNum - 1) * this.size + currLength - 1;

        const retVal = this.stacks[peekIndex];

        delete this.stacks[peekIndex];

        this.Cnts[`stack-${stackNum}`]--;

        return retVal;
    }
}

const stackFabric = new StackArray();

stackFabric.pushToStack(1, 1);
stackFabric.pushToStack(1, 2);
stackFabric.pushToStack(3, 201);
stackFabric.pushToStack(3, 202);
console.log(stackFabric.peekFromStack(3));

console.log(stackFabric);
