export default class TypeItem {

  private static readonly defaultValues: Record<string, any> = {
    string: "",
    number: 0,
    boolean: false,
    object: {},
    array: [],
  };

  public static getType<T>(crrItem: T | T[]) {
    return Array.isArray(crrItem) ? "array" : typeof crrItem;
  }


  public static nothingType(type: string): any {
    return TypeItem.defaultValues[type] ?? undefined;
  }

}
