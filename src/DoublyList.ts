import { throwDeprecation } from "process";

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

  public remove(value: T) {
    if (!this.head || !this.tail) {
      throw new Error("Nothing to remove!!!")
    }

    if (this.head.data === value) {

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return;
      }

      this.head = this.head.next;
      this.circular();
      return;
    }

    if (this.tail.data === value) {
      this.tail = this.tail.prev;
      this.circular();
      return;
    }

    if (!this.head.next) {//type guard
      throw new Error("even though it's impossible for head.next to be null, typescript thinks it can be, because I initialized these properties as null, and allowed for the possibility of them being null")
    }

    let currNode: Node<T> = this.head.next;

    while (currNode !== this.head && currNode.data !== value) {
      if (currNode.next === null) {
        throw new Error;
      }
      currNode = currNode.next;
    }

    if (currNode.data !== value) {
      // The loop finished by returning to the head, so the value was not found.
      throw new Error(`${value} was not found in the List!!!`)
      return;
    }

    if (currNode.prev) {//type guard
      currNode.prev.next = currNode.next;
    }

    if (currNode.next) {//type guard
      currNode.next.prev = currNode.prev;
    }
  }




}
