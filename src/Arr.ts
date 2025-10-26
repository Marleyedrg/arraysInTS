export class Arr<T> {
  private size: number;
  public length: number;
  private items: T[];
  private arrType: string;

  constructor(size: number, items: T[]) {
    if (items.length > size) {
      throw new Error("Array size exceeded!");
    }

    this.items = items;
    this.arrType = Array.isArray(items[0]) ? "array" : typeof items[0];
    this.size = size;
    this.length = size;

    this.validate();
  }

  private nothingType(type: string): any {
    if (type === "string") return "";
    if (type === "number") return 0;
    if (type === "boolean") return false;
    if (type === "object") return new Object;
    if (type === "array") return new Array;
    return undefined;
  }

  private validate(): void {
    for (let i: number = 1; i < this.size; i++) {
      let itemType = Array.isArray(this.items[i]) ? "array" : typeof this.items[i];

      if (itemType != this.arrType) {

        if (this.items[i] === undefined) {
          this.items[i] = this.nothingType(this.arrType);
        } else {
          throw new Error(
            `Type mismatch at index ${i}: expected '${this.arrType}', got '${itemType}'`
          );
        }
      }
    }
  }

  public get(index?: number): T | T[] {
    if (index !== undefined) {
      return this.items[index];
    }
    return [...this.items];
  }

  public set(index: number, value: any): void {

    if (index > this.size) {
      throw new Error("Array size exceeded!");
    }

    let itemType = Array.isArray(value) ? "array" : typeof value;

    if (itemType !== this.arrType) {
      throw new Error(
        `Type mismatch at value ${value}: expected '${this.arrType}', got '${itemType}'`
      );
    }

    this.items[index] = value;
  }

  private removeAt(index: number): T | T[] {
    let value = this.items[index];

    let itemType = Array.isArray(value) ? "array" : typeof value;

    this.items[index] = this.nothingType(itemType);

    return value;
  }

  public shift(): T | T[] {
    let index = 0;
    let removed = this.removeAt(index);

    // move elemts to left
    for (let i = index; i < this.size - 1; i++) {
      this.items[i] = this.items[i + 1];
    }

    // Clears the last slot 
    this.items[this.size - 1] = this.nothingType(this.arrType);
    return removed;
  };
  public pop(): T | T[] {
    return this.removeAt(this.size - 1);
  };
}

