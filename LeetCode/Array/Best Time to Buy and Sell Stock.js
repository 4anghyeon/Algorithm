var maxProfit = function (prices) {
    let max = 0;
    let have = 0;
    for (let i = 0; i < prices.length; i++) {
        let todayPrice = prices[i];

        if (i === 0) have = todayPrice;
        else {
            max = Math.max(max, todayPrice - have);
            if (have > todayPrice) have = todayPrice;
        }
    }
    return max;
};
