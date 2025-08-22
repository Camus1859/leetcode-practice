// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let maximumProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0 && i < j && prices[j] - prices[i] > maximumProfit) {
        maximumProfit = prices[j] - prices[i];
      }
    }
  }
  return maximumProfit;
}
// const prices1 = [2, 1, 4];
// console.log(maxProfit(prices1)); // Expected:

const prices2 = [7,1,5,3,6,4];
console.log(maxProfit(prices2)); // Expected: 5
