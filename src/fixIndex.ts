
/**
 * Returns the correct index when a negative value is used.
 * For example, if the array length = 5:
 *  -1 -> 4
 *  -5 -> 0
 *  -6 -> error (out of bounds)
 *
 * if positive, return as is.
 */
export default function fixIndex(value: number, size: number): number {
  const result = value < 0 ? size + value : value;

  if (result < 0) {
    throw Error("error (out of bounds)!!!")
  }

  return result;

}
