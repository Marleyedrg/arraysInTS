export class MaxSubArray {

  static gretter(n1: number, n2: number): number {
    if (n1 > n2) return n1;
    return n2;
  }

  static calc(nums: number[]): number {
    let size: number = nums.length;
    let cSum: number = 0;

    //first element because we can have a array of negatives
    let maxSum: number = nums[0];

    for (let i = 0; i < size; i++) {
      cSum += nums[i];

      //the biggest sum found
      maxSum = this.gretter(cSum, maxSum)

      //reset if it becomes negative
      cSum = this.gretter(cSum, 0)
    }

    return maxSum;
  }
}
