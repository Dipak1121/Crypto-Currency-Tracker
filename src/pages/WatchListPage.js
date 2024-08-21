import React, { useEffect, useState } from 'react'
import Header from '../components/common/header/Header'
import { get100Coins } from '../functions/get100Coins'
import TabsComponent from '../components/dashboard/tabs';

const WatchListPage = () => {

  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  if(!Array.isArray(watchlist)){
    watchlist = [];
  }
  const [watchlistedCoinsData, setWatchListedCoinsData] = useState([]);

  useEffect(()=>{
    getData();
  }, [])

  async function getData() {
    const coins = await get100Coins();
    setWatchListedCoinsData(coins.filter((coin)=>{
      return (watchlist.includes(coin.id));
    }))
  }

  return (
    <div>
      <Header />
      {
        watchlistedCoinsData.length > 0 ? (
          <TabsComponent coins={watchlistedCoinsData} />
        ) : (
          <p className='no-crypto'>No Crypto is added in watchlist</p>
        )
      }
      
    </div>
  )
}

export default WatchListPage
