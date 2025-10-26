import { Arr } from "./Arr.ts"
//https://tejaswinimr.medium.com/mastering-data-structures-and-algorithms-a-step-by-step-roadmap-9d5a8aa4a798

let arr = new Arr<object>(3, [["init"],]);

console.log(arr.set(0, 1));

console.log(arr.get())

