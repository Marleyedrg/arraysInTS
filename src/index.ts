import DoublyList from "./DoublyList";

const list = new DoublyList<number>;

list.add(1);
list.add(2);
list.add(3);

list.remove(2);

list.add(7)
console.log(list.head?.next?.data);



