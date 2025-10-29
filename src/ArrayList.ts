import FixedArr from "./FixedArray";
import fixIndex from "./fixIndex";
import TypeItem from "./TypeItem";
export default class ArrayList<T> extends FixedArr<T> {

  override maxSize: number = this.length;
  //apenas ignora maxSize para continuar funcionando como herdado de FixedArr
  protected override arrType: string = this.arrType;

  public add(value: T): void {
    let itemType = Array.isArray(value) ? "array" : typeof value;

    if (itemType !== this.arrType) {
      throw new Error(
        `Type mismatch at value ${value}: expected '${this.arrType}', got '${itemType}'`
      );
    }
    this.items[this.length] = value;
    this.length++;
    this.maxSize++;
  }
}
