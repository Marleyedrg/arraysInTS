
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
  return value < 0 ? size + value : value;

}
