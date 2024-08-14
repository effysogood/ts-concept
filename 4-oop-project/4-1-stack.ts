/**
 * Stack 자료 구조
 * LIFO Last In First Out
 */

interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this._size === this.capacity) {
      throw new Error('Stack is full');
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  // ✅ null == undefined, null !== undefined
  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('Effy');
stack.push('Ellie');
stack.push('Chang');
while (stack.size !== 0) {
  console.log(stack.pop());
}
