import React, { useEffect, useState } from "react";
import Header from "../components/common/header/Header";
import TabsComponent from "../components/dashboard/tabs";
import axios from "axios";
import SearchComponent from "../components/dashboard/search";
import PaginationComponent from "../components/dashboard/pagination";
import Loader from "../components/common/loader/Loader";
import BackToTop from "../components/common/backToTop/BackToTop";
import { get100Coins } from "../functions/get100Coins";

const DashBoardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loadind, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    // console.log("Page is changed ", value)
    setPage(value);
    let previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  function onSearchChange(e) {
    // console.log(search);
    setSearch(e.target.value);
  }

  // useEffect(() => {
  //   setPaginatedCoins(coins.slice(0, 10));
  // }, [coins]);

  let filteredCoins;

  if (search) {
    filteredCoins = coins.filter((item) => {
      if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return true;
      }
      return false;
    });
  } else {
    filteredCoins = paginatedCoins;
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async ()=>{
    setLoading(true);
    const myCoins = await get100Coins();
    // console.log("These Are my coins",myCoins)
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <BackToTop />
      {
        loadind ? <Loader /> :
        <>
          <SearchComponent search={search} onChange={onSearchChange} />
          <TabsComponent coins={filteredCoins} />
          <PaginationComponent page={page} handleChange={handleChange} />
        </>
      }
    </div>
  );
};

export default DashBoardPage;
