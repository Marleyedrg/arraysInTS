export default class FixedNumberArray {

  private sizeOfArray: number;
  //size we want

  private byterByItem = Int32Array.BYTES_PER_ELEMENT;
  //In this case, on a 32-bit system, we are defining that we want to use 4 bytes to represent each int.

  private buffer: ArrayBuffer;

  private arr: Int32Array;

  constructor(size: number, values: number[]) {
    this.sizeOfArray = size;

    this.buffer = new ArrayBuffer(this.sizeOfArray * this.byterByItem);
    //hexadecimal value by index

    this.arr = new Int32Array(this.buffer);

    for (let i = 0; i < this.sizeOfArray; i++) {
      this.arr[i] = values[i];
    }

    return this.arr;
  }

}
