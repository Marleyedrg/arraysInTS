import FixedArr from "./FixedArray";
import List, { ListWithLoop } from "./List";
import DoublyList from "./DoublyList";
import ArrayList from "./ArrayList";

const list = new DoublyList<number>;

list.add(1);
list.add(2);
list.add(3);

console.log(list.head?.next?.next?.next?.data)



