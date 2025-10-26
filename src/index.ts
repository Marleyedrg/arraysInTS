import { Arr } from "./Arr.ts"
//https://tejaswinimr.medium.com/mastering-data-structures-and-algorithms-a-step-by-step-roadmap-9d5a8aa4a798

let arr = new Arr<number>(3, [2,]);

console.log(arr.set(1, 2));

let a = arr;

console.log(a.get())

