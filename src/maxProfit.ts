export class MaxProfit {
  static calc(prices: number[]): number {
    if (prices.length === 0) return 0;

    let min: number = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
      // Calculate potential profit if we sell at current price
      const profit = prices[i] - min;

      // Update maxProfit if this is better
      if (profit > maxProfit) {
        maxProfit = profit;
      }

      // Update min price if current price is lower
      if (prices[i] < min) {
        min = prices[i];
      }
    }

    return maxProfit;
  }
}
