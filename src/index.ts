import { Arr } from "./Arr.ts"
//https://tejaswinimr.medium.com/mastering-data-structures-and-algorithms-a-step-by-step-roadmap-9d5a8aa4a798

let arr = new Arr<number>(3);

for (let i: number = 0; i < 3; i++) {
  arr.set(i, i + 1);
}

arr.set(0, 100);

console.log(arr);
