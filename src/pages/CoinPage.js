import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/header/Header";
import Loader from "../components/common/loader/Loader";
import { setCoinObj } from "../functions/setCoinObj";
import ListComponent from "../components/dashboard/list";
import CoinInfo from "../components/coin/coinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChartComponent from "../components/linechart";import { convertDate } from "../functions/convertDate";
import SelectDaysComponent from "../components/coin/selectDays";
import { settingChartData } from "../functions/setChartData";
import TogglePriceTypes from "../components/coin/priceType";

const CoinPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [coinData, setCoinData] = useState(null);
  const[days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');

  //console.log("Coin Data => ", coinData);
  console.log("Number of Days are ...", days);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getData();
    }
  }, []);

  async function getData() {

    const data = await getCoinData(id);
    if(data){
      setCoinObj(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if(prices.length > 0){
        // console.log("WoHo");
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }

    setLoading(false);
    
  }

  async function handleDaysChange(e){
    setDays(e.target.value);
    setLoading(true);
    const prices = await getCoinPrices(id, e.target.value, priceType);
      if(prices.length > 0){
        settingChartData(setChartData, prices);
        
      }
      setLoading(false);
  }

  
  const handlePriceTypeChange = async (event) => {
    // console.log("Hi this is newAlignment", event.target.value);
    setPriceType(event.target.value);
    setLoading(true);
    const prices = await getCoinPrices(id, days, event.target.value);
    // console.log(prices);
      if(prices.length > 0){
        settingChartData(setChartData, prices); 
      }
      setLoading(false);
  };

  return (
    <div>
      <Header />
      {loading || !coinData ? (
        <Loader />
      ) : (
        <>
          <table className="grey-wrapper">
            <ListComponent coin={coinData} />
          </table>
          <div className="chart-wrapper" >
            <SelectDaysComponent days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceTypes priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChartComponent chartData={chartData} priceType={priceType}/>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
