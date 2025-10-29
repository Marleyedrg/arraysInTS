import List from "./List";

interface node<T> {
  prev: node<T> | null,
  data: T,
  next: node<T> | null,
}
//circular doubly list
export default class DoublyList<T> {
  head: node<T> | null = null;
  tail: node<T> | null = null;

  add(value: T) {
    const newNode: node<T> = {
      prev: null,
      data: value,
      next: null
    };

    if (this.head === null) {

      this.head = newNode;
      this.tail = newNode;

      this.head.prev = this.tail;

      return;
    }

    if (this.tail !== null) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.tail.next = this.head;

  }
}

