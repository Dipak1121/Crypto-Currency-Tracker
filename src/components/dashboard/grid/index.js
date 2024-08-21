import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { addToWatchlist } from "../../../functions/addToWatchList";
import { removeFromWatchlist } from "../../../functions/removeFromWatchList";

const GridComponent = ({ coin }) => {

  let watchlist = JSON.parse(localStorage.getItem("watchlist"));
  if(!Array.isArray(watchlist)){
    watchlist = [];
  }
  // console.log("Watchlist", watchlist)
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={
          coin.price_change_percentage_24h < 0
            ? "grid-container-red"
            : "grid-container"
        }
      >
        <div className="flex-info">
          <div className="flex-symbol">
            <img src={coin.image} className="coin-logo" />
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>
          {
            watchlist.includes(coin.id) ? (
              <div className="watchlist pink" onClick={(event)=>{
                event.stopPropagation();
                removeFromWatchlist(coin.id)
              }}>
                <StarBorderIcon />
              </div>
            ) : (
              <div className="watchlist" onClick={(event)=>{
                event.stopPropagation();
                addToWatchlist(coin.id);
              }}>
                <StarBorderIcon />
              </div>
            )
          } 
        </div>
        <div className="chip-flex">
          {coin.price_change_percentage_24h < 0 ? (
            <div className="price-chip price-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          ) : (
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
          )}
          {coin.price_change_percentage_24h < 0 ? (
            <div className="icon-chip red-icon">
              <TrendingDownIcon />
            </div>
          ) : (
            <div className="icon-chip ">
              <TrendingUpIcon />
            </div>
          )}
        </div>
        <div className="info-container1">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total-volume">
            Total Volume: ${coin.total_volume.toLocaleString()}
          </p>
          <p className="market-cap">
            Market Cap: ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GridComponent;
