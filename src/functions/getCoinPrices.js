import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=0`
    )
    .then((response) => {
      //console.log("Response>>, ", response.data);
      //console.log(priceType);
      return response.data[priceType];
    })
    .catch((err) => {
      console.log(err);
    });


    return prices;
};
