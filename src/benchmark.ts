import Arr from './Arr.js';

function benchmark(label: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${label}: ${(end - start).toFixed(3)} ms`);
}

// Native array
benchmark("Native Array push", () => {
  const arr: number[] = [];
  for (let i = 0; i < 1_000_000; i++) {
    arr.push(i);
  }
});

// Your custom Arr
benchmark("Custom Arr set()", () => {
  const myArr = new Arr<number>([], 1_000_000, "number");
  for (let i = 0; i < 1_000_000; i++) {
    myArr.set(i, i);
  }
});

// Read test
benchmark("Custom Arr get()", () => {
  const myArr = new Arr<number>(Array.from({ length: 1_000_000 }, (_, i) => i));
  for (let i = 0; i < 1_000_000; i++) {
    myArr.get(i);
  }
});
