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
  public presum: number[];
  public size: number;

  public constructor(size: number = 1) {
    this.items = new Array(size);
    // Create the internal fixed-size array for this instance
    this.size = this.sizeMethod();
    this.presum = new Array(size);
  };

  public set(index: number, value: T) {
    this.checkIndex(index);
    this.checkType(value);
    this.items[index] = value;
    //if value of array is not number, update presum
    if (typeof value == "number") {
      this.updatePreSum();
    };
  };

  public get(index: number): T | undefined {
    this.checkIndex(index);
    return this.items[index];
  };

  private sizeMethod(): number {
    return this.items.length
  };

  public remove(index: number): T | undefined {
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

  public toLiteral(): (T | undefined)[] {
    return [...this.items];
  }

  private updatePreSum() {
    //we dont need verify each value of array, because the method checkType
    //

    const result: number[] = new Array(this.size);

    let acc = 0;

    for (let i = 0; i < this.size; i++) {
      const val = (this.items[i] as number) ?? 0
      //?? 0 → if undefined, define to 0.
      acc += val;
      result[i] = acc;
    }
    this.presum = result;
  }

  public rangeSum(startRange: number, finalRange: number): number {
    this.checkIndex(startRange);
    this.checkIndex(finalRange);

    let toTheExtendIwant = this.presum[finalRange];
    //sum of everything that comes before the value of that finalRange that i want

    let whatIdontWant = this.presum[startRange - 1];
    //sum of everything that comes before the value of that start range that i want

    if (startRange === 0) return this.presum[finalRange];

    //Where can I find the sum of the part I don’t want?
    //
    // In the preSum array, at the index immediately before my starting index.

    let justWhatIwant = toTheExtendIwant - whatIdontWant;

    return justWhatIwant;
  }

}

// 0 =1
// 0 + 1
