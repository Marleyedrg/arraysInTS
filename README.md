# Study of Algorithms and Data Structures in TypeScript

This repository is dedicated to the study and practice of **algorithms** and **data structures** using **TypeScript**. The goal is to implement solutions in a clear, efficient, and understandable way, serving as a reference for learning and review.

## Project Goals

- Implement classic algorithms (searching, sorting, etc.) in TypeScript.
- Study and implement different data structures (lists, stacks, queues, trees, graphs, etc.).
- Apply programming best practices and object-oriented principles.
- Create practical examples and exercises for content reinforcement.

## 🚀 How to Use

1. Clone the repository:

```bash
git clone git@github.com:Marleyedrg/algorithmsDataStructuresTS.git
```
Install dependencies:
```bash
npm install
```
Implement the modules you want in `src/index.ts`.
Compile and run with: `npm run see`
EX:
~~~ts
//src/index.ts
import { Arr } from "./Arr.ts"
import { MaxProfit } from "./maxProfit.ts";
import { MaxSubArray } from "./maxSubArray.ts";
import { TwoSum } from "./TwoSum.ts";

const nums: number[] = [7, 6, 4, 3, 1];

console.log(MaxProfit.calc(nums));
~~~
compile e execute 
~~~bash
npm run see
~~~
~~~node
> arraysints@1.0.0 see
> npm run build && node dist/index.js


> arraysints@1.0.0 build
> esbuild src/index.ts --bundle --outfile=dist/index.js --platform=node --target=es2020


  dist/index.js  499b

⚡ Done in 2ms
0
~~~

