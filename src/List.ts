interface Node<T> {
  value: T,
  next: Node<T> | null
}

export default class List<T> {

  head: Node<T> | null = null;

  add(value: T) {

    const newNode: Node<T> = { value, next: null };

    if (this.head === null) {
      this.head = newNode;
      return;
    }//init

    let curNode: Node<T> = this.head;

    while (curNode.next !== null) {
      curNode = curNode.next;
    }
    curNode.next = newNode;

  }

}
