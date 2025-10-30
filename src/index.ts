import FixedArr from "./FixedArray";
import List, { ListWithLoop } from "./List";
import DoublyList from "./DoublyList";
import ArrayList from "./ArrayList";

const arr = new ArrayList<number>([53], 1)


arr.add(10);
arr.set(1, 2);

arr.add(12)
arr.set(2, 3);

console.log(arr.set(0, 1));

