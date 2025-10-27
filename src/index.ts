import Arr from "./Arr.ts"
import { MaxProfit } from "./maxProfit.ts";
import { MaxSubArray } from "./maxSubArray.ts";
import { TwoSum } from "./TwoSum.ts";

let arr: Arr<object> = new Arr<object>([[], [],], 5);

console.log(arr.get(0));
arr.shift();
console.log(arr.pop())
console.log(arr.get())
console.log(arr.fill())



