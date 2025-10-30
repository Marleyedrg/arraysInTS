import FixedArr from "./FixedArray";
import List, { ListWithLoop } from "./List";
import DoublyList from "./DoublyList";
import ArrayList from "./ArrayList";

const list = new DoublyList<number>;

list.add(1);
list.add(2);

list.remove(4);

console.log(list.head)




