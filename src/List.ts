interface Node<T> {
  data: T,
  next: Node<T> | null,
}

export default class List<T> {

  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  add(value: T) {
    const newNode: Node<T> = { data: value, next: null }

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }


    /**
    *we need (this.tail !== null)
    *because (this.tail.next) could be null
    */
    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

  }

}

export class ListWithLoop<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  add(value: T) {
    const newNode: Node<T> = { data: value, next: null }

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let currNode: Node<T> | null = this.head;

    while (currNode.next !== null) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

}

