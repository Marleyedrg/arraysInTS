import FixedArr from "./FixedArray";
import TypeItem from "./TypeItem";
export default class ArrayList<T> extends FixedArr<T> {

  override maxSize: number = this.length;
  //apenas ignora maxSize para continuar funcionando como herdado de FixedArr

  public add(value: T): void {
    let itemType = TypeItem.getType(value);

    if (itemType !== this.arrType) {
      throw new Error(
        `Type mismatch at value ${value}: expected '${this.arrType}', got '${itemType}'`
      );
    }
    let previousArray = this.get();
    console.log(previousArray);

    const newArray = new FixedArr<T>([...previousArray, value]);

    this.items = newArray.get();

    this.length = this.items.length;
    this.maxSize = this.length;
  }
}
