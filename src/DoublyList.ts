interface Node<T> {
  prev: Node<T> | null,
  data: T,
  next: Node<T> | null
}
export default class DoublyList<T> {

  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  protected circular() {

    if (!this.head || !this.tail) {
      throw Error("head and tail don't exist here!!!")
    }

    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  add(value: T) {
    const newNode: Node<T> = {
      prev: null,
      data: value,
      next: null
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.circular();
      return;
    }

    if (!this.head || !this.tail) {
      throw Error("head and tail don't exist here!!!")
    }//type safety

    let lastTail: Node<T> = this.tail;
    //save the current tail to last tail, to switch with new node in future

    lastTail.next = newNode;
    //The last tail next need to pointer to new tail 

    this.tail = newNode;
    //new tail need to be the new node
    this.tail.prev = lastTail;
    //the new tail prev need to pointer to last tail

    this.circular();
    //make circular again
  }

  remove(value: T) {

    if (!this.head || !this.tail || !this.head.next) {
      throw Error("head and tail don't exist here!!!")
    }//type safety

    if (this.head.data === value) {
      this.head = this.head.next;
      this.circular();
      return;
    }
    //case where value is on head

    if (this.tail.data === value) {
      this.tail = this.tail.prev;
      this.circular();
      return;
    }
    //case where value is on tail

    let currNode: Node<T> = this.head.next;

    //currNode.next -> type safety
    while (currNode.next && currNode.data !== value) {

      //If currNode is equal to head, it means we have made a full circle.
      if (currNode == this.head) {
        throw new Error(`value (${value}) not find in ${DoublyList} to remove !!!`)
      }
      //go to next Node, nothing that we need here!
      currNode = currNode.next;
    }

    //currNode.next && currNode.prev -> type safety
    if ((currNode.next && currNode.prev) && currNode.data === value) {
      //(a <-> currNode <-> c)

      //lets remove currNode

      const a: Node<T> = currNode.prev;
      const c: Node<T> = currNode.next;

      a.next = c;
      //a.next = c

      c.prev = a;
      //c.prev = a
      return;
    }
  }
}
