/**
 * Class that simulates a fixed-size, generically typed array.
 * @template T - Type of the array elements
 */
export class Arr<T> {
  /*
  It should not be static, because each array needs to be independent.
  <T> tipagem gênerica
  */
  private items: (T | undefined)[];
  private firstType?: string;

  constructor(size: number = 1) {
    this.items = new Array(size);
    // Create the internal fixed-size array for this instance
  };

  set(index: number, value: T) {
    this.checkIndex(index);
    this.checkType(value);
    this.items[index] = value;
  };

  get(index: number): T | undefined {
    this.checkIndex(index);
    return this.items[index];
  };

  size(): number {
    return this.items.length
  };

  remove(index: number): T | undefined {
    const removed = this.items[index];
    this.items[index] = undefined;
    return removed;
  }

  private checkIndex(index: number) {
    if (index < 0 || index >= this.items.length) {
      throw new Error(`index ${index} out of bounds`);
    };
  };

  private checkType(value: T) {
    // console.log(typeof this.items[index])
    if (this.firstType === undefined) {
      this.firstType = typeof value;
    } else {
      if (typeof value !== this.firstType) {
        throw new Error(
          `Value ${value} does not match the first type ${this.firstType}`
        );
      }
    }
  }

  toLiteral(): (T | undefined)[] {
    return [...this.items];
  }

}
