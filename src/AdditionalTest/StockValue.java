public class StockValue {
    public static void main(String[] args) {
        int[] prices = {10, 9, 6, 5, 15};
        System.out.println("Stock value with best profit: " + findBestProfit(prices));
    }

    public static int findBestProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int bestProfit = 0;
        
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            }
            int profit = price - minPrice;
            if (profit > bestProfit) {
                bestProfit = profit;
            }
        }
        return bestProfit;
    }
}

