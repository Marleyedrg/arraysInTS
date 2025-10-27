export default class Arr<T> {

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
    if (type === "string") return "";
    if (type === "number") return 0;
    if (type === "boolean") return false;
    if (type === "object") return new Object;
    if (type === "array") return new Array;
    return undefined;
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

  public get(): T[] | undefined;//type Overload
  public get(index?: number): T | undefined
  public get(index?: number): T | T[] | undefined {
    if (index !== undefined) {
      return this.items[index];
    }
    if (this.length == 0) {
      return undefined
    }
    return [...this.items];
  }

  public set(index: number, value: any): void {

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
}
