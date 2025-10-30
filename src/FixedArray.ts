import TypeItem from "./TypeItem";
import fixIndex from "./fixIndex";
export default class FixedArr<T> {

  /**
  *readonly
  *max size defined in constructor 
  */
  public readonly maxSize: number;

  public length: number;
  protected items: T[];
  /**
  *readonly
  *array type defined in constructor
  */
  protected readonly arrType: string;

  constructor(items: T[], size?: number, arrType?: string) {

    if (items.length == 0 && arrType === undefined) {
      throw new Error(
        "You need pass unless one element in items parameter to define type, or use type parameter"
      );
    }

    this.items = items;

    if (!size) {
      size = this.items.length;

    } else if (items.length > size) {

      throw new Error("Array max size exceeded!");
    }

    if (arrType !== undefined) {
      this.arrType = arrType;
    } else {
      this.arrType = TypeItem.getType(items[0]);
    }

    this.length = items.length;

    this.maxSize = size;

  }


  public fill(): T[] {
    for (let i = 0; i < this.maxSize; i++) {
      if (this.items[i] !== undefined) {
        continue;
      };
      this.items[i] = TypeItem.nothingType(this.arrType);
    };
    this.length = this.items.length;
    return this.items;
  }

  public get(): T[];//type Overload
  public get(index: number): T;
  public get(index?: number): T | T[] {

    if (index !== undefined) {

      if (index > this.maxSize - 1) {
        throw new Error("Array max size exceeded!");
      }

      index = fixIndex(index, this.maxSize);

      return this.items[index];
    }
    if (this.length == 0) {
      console.log(`empty ${this.arrType}`)
    }
    return [...this.items];
  }

  public set(index: number, value: any): T[] {

    index = fixIndex(index, this.maxSize);

    if (index >= this.maxSize) {
      throw new Error("Array maxSize exceeded!");
    }

    if (index >= this.length) {
      this.length++;
    }

    let itemType = TypeItem.getType(value);

    if (itemType !== this.arrType) {
      throw new Error(
        `Type mismatch at value ${value}: expected '${this.arrType}', got '${itemType}'`
      );
    }

    this.items[index] = value;

    return this.get();
  }

  private removedAt(index: number) {
    let removed = this.items[index];

    if (index == 0) {
      this.items.shift();
    }
    if (index == this.items.length - 1) {
      this.items.pop();
    }

    this.length = this.items.length;

    return removed;
  }

  public shift(): T | T[] {
    return this.removedAt(0);
  };
  public pop(): T | T[] {
    return this.removedAt(this.items.length - 1);
  };


}

