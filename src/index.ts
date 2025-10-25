import { constrainedMemory } from "process";
import { Arr } from "./Arr.ts"
//https://tejaswinimr.medium.com/mastering-data-structures-and-algorithms-a-step-by-step-roadmap-9d5a8aa4a798

let arr = new Arr<number>(5);

for (let i: number = 0; i < arr.size; i++) {
  arr.set(i, i + 1);
}
console.log(arr.toLiteral())
console.log(arr.presum);

console.log(arr.rangeSum(3,4))
