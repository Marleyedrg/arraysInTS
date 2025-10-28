export default class Arr<T> {
  private static readonly defaultValues: Record<string, any> = {
    string: "",
    number: 0,
    boolean: false,
    object: {},
    array: [],
  };

  /**
  *readonly
  *max size defined in constructor 
  */
  public readonly maxSize: number;

  public length: number;
  private items: T[];
  /**
  *readonly
  *array type defined in constructor
  */
  private readonly arrType: string;

  private getType(crrItem: T | T[]) {
    return Array.isArray(crrItem) ? "array" : typeof crrItem;
  }

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
      this.arrType = this.getType(items[0]);
    }

    this.length = items.length;

    this.maxSize = size;

  }

  private nothingType(type: string): any {
    return Arr.defaultValues[type] ?? undefined;
  }

  public fill(): T[] {
    for (let i = 0; i < this.maxSize; i++) {
      if (this.items[i] !== undefined) {
        continue;
      };
      this.items[i] = this.nothingType(this.arrType);
    };
    this.length = this.items.length;
    return this.items;
  }

  public get(): T[];//type Overload
  public get(index: number): T;
  public get(index?: number): T | T[] {
    if (index !== undefined) {

      index = this.fixIndex(index, this.maxSize);

      return this.items[index];
    }
    if (this.length == 0) {
      console.log(`empty ${this.arrType}`)
    }
    return [...this.items];
  }

  public set(index: number, value: any): void {

    index = this.fixIndex(index, this.maxSize);

    if (index >= this.maxSize) {
      throw new Error("Array maxSize exceeded!");
    }

    if (index >= this.length) {
      this.length++;
    }

    let itemType = Array.isArray(value) ? "array" : typeof value;

    if (itemType !== this.arrType) {
      throw new Error(
        `Type mismatch at value ${value}: expected '${this.arrType}', got '${itemType}'`
      );
    }

    this.items[index] = value;
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



  /**
   * Returns the correct index when a negative value is used.
   * For example, if the array length = 5:
   *  -1 -> 4
   *  -5 -> 0
   *  -6 -> error (out of bounds)
   *
   * if positive, return as is.
   */
  private fixIndex(value: number, size: number): number {
    return value < 0 ? size + value : value;
  }
}

