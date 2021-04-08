function maxProfit(prices: number[]): number {
  if (prices == null || prices.length < 2) return;

  let total = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > prices[i + 1]) continue;

    let diff = prices[i + 1] - prices[i];
    total += diff;
  }

  return total;
};