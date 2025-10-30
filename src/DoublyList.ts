interface Node<T> {
  prev: Node<T> | null,
  data: T,
  next: Node<T> | null
}

export default class DoublyList<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = this.head;

  protected circular() {

    if (this.head === null || this.tail === null) {
      throw new Error;
    }

    this.head.prev = this.tail;

    this.tail.next = this.head;
  }

  public add(value: T) {

    const newNode: Node<T> = {
      prev: null,
      data: value,
      next: null
    }

    if (this.head === null) {
      this.head = newNode;

      this.tail = newNode;

      this.circular();
      return;
    }

    if (this.tail === null) {
      throw new Error;
    }

    const lastTail: Node<T> = this.tail;

    this.tail = newNode;

    this.tail.prev = lastTail;

    lastTail.next = this.tail;

    this.circular();
  }




}
