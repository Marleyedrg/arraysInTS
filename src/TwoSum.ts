
export class TwoSum {
  /*
  Given an array of integers nums and an integer target,
  return indices of the two numbers such that they add up to target.
  */

  static isEven(num: number): boolean {
    return num % 2 === 0;
  }

  static calc(nums: number[], target: number): number[] | undefined {
    let size: number = nums.length;
    let targetIsEven: boolean = this.isEven(target);


    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        const num1IsEven = this.isEven(nums[i]);
        const num2IsEven = this.isEven(nums[j]);

        // Check if both numbers have the same parity
        const bothSameType = (num1IsEven === num2IsEven);

        // If the target is even but the numbers are of different types (odd + even = odd), skip
        if (targetIsEven && !bothSameType) {
          continue;
        }

        // If the target is odd but the numbers are of the same type (even + even or odd + odd = even), skip
        if (!targetIsEven && bothSameType) {
          continue;
        }

        // Now test the sum
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }

  }
}
