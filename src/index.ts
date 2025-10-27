import Arr from "./Arr.ts"
import { MaxProfit } from "./maxProfit.ts";
import { MaxSubArray } from "./maxSubArray.ts";
import { TwoSum } from "./TwoSum.ts";

let arr: Arr<number> = new Arr<number>(5, [1, 2, 3, 4, 5]);
let nums: number[] = arr.get();

arr.set(1, 2)
console.log(arr.get());
console.log(arr.pop())
console.log(arr.get())
console.log(arr.maxSize)
console.log(arr.length)



