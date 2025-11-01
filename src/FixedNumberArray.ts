export default function FixedNumberArray(size: number, values: number[]) {

  const byterByItem = Int32Array.BYTES_PER_ELEMENT;

  //In this case, on a 32-bit system, we are defining that we want to use 4 bytes to represent each int.

  const sizeOfArray: number = size;

  const buffer: ArrayBuffer = new ArrayBuffer(sizeOfArray * byterByItem);
  //take continous free space that we want
  //hexadecimal value by index

  const arr: Int32Array = new Int32Array(buffer);

  for (let i = 0; i < sizeOfArray; i++) {
    arr[i] = values[i];
  }

  return arr;
}
