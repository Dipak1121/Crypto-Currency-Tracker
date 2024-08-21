import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import SelectCoins from "../components/comparePage/select";
import SelectDaysComponent from "../components/coin/selectDays";
import { getCoinData } from "../functions/getCoinData";
import { setCoinObj } from "../functions/setCoinObj";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/setChartData";
import Loader from "../components/common/loader/Loader";
import ListComponent from "../components/dashboard/list";
import CoinInfo from "../components/coin/coinInfo";
import LineChartComponent from "../components/linechart";
import TogglePriceTypes from "../components/coin/priceType";

const ComparePage = () => {
    const [loading, setLoading] = useState(true);
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("prices");
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});

    const [chartData, setChartData] = useState({});

  async function handleDaysChange(event) {
    setLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  }

  const handleCoinChange = async (event, isCoin2) => {
    setLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      setCoinObj(setCrypto2Data, data);
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      setCoinObj(setCrypto1Data, data);
      }

    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);

    if(prices1.length > 0 && prices2.length > 0){
      settingChartData(setChartData, prices1, prices2);
      setLoading(false);
    }
    setLoading(false);
    }

    
  useEffect(()=>{
    getData();
  }, []);

  async function getData() {
    setLoading(true);

    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if(data1){
        setCoinObj(setCrypto1Data, data1);
    }

    if(data2){
        setCoinObj(setCrypto2Data, data2);
    }

    if(data1 && data2){
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
    }
    setLoading(false);
  }


  const handlePriceTypeChange = async (event, newAlignment) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices1 = await getCoinPrices(crypto1, days, event.target.value);
    const prices2 = await getCoinPrices(crypto2, days, event.target.value);
    settingChartData(setChartData, prices1, prices2);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading ? <Loader /> :
      <>
      <div className="coin-days-flex">
        <SelectCoins
          crypto1={crypto1}
          crypto2={crypto2}
          handleCoinChange={handleCoinChange}
        />
        <SelectDaysComponent
          days={days}
          handleDaysChange={handleDaysChange}
          noPTag={true}
        />
      </div>
        <table className="grey-wrapper">
          <ListComponent coin={crypto1Data} />
        </table>
        <table className="grey-wrapper">
          <ListComponent coin={crypto2Data} />
        </table>

        <div className="chart-wrapper">
          <TogglePriceTypes priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
          <LineChartComponent chartData={chartData} priceType={priceType} multiAxis={true}/>
        </div>
        <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
        <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
      </>
}
    </div>
  );
};

export default ComparePage;
