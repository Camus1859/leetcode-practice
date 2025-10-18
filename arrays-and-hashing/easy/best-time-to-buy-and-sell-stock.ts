// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {

    let maxProfit = 0;
    let lowestBuyPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
      const currentPrice = prices[i];

      if (currentPrice < lowestBuyPrice) {
        lowestBuyPrice = currentPrice;
      }

      if (currentPrice - lowestBuyPrice > maxProfit) {
        maxProfit = currentPrice - lowestBuyPrice;
      }
    }
    return maxProfit;

}
// const prices1 = [2, 1, 4];
// console.log(maxProfit(prices1)); // Expected:

const prices2 = [7,1,5,3,6,4];
console.log(maxProfit(prices2)); // Expected: 5
