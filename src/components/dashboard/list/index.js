import React from 'react'
import "./style.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const ListComponent = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
      <td className="td-image">
        <img src={coin.image} className="list-coin-logo" />
      </td>
      <td className='coin-name'>
        <div className="name-col">
          <p className="list-coin-symbol">{coin.symbol}</p>
          <p className="list-coin-name">{coin.name}</p>
        </div>
      </td>
      <Tooltip title="Price changed in 24 hours">
      <td className="chip-flex">
        {coin.price_change_percentage_24h < 0 ? (
          <div className="price-chip price-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        ) : (
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        )}
      </td>
      </Tooltip>
        <td className='trending-arrow'>
        {coin.price_change_percentage_24h < 0 ? (
          <div className="icon-chip red-icon">
            <TrendingDownIcon />
          </div>
        ) : (
          <div className="icon-chip ">
            <TrendingUpIcon />
          </div>
        )}
      </td>
      <Tooltip title="Current Price">
      <td className="info-container">
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
        </td>
        </Tooltip>
        <td style={{textAlign:"right"}}>
        <p className="total-volume">Total Volume: ${coin.total_volume.toLocaleString()}</p>
        </td>
        <td style={{textAlign:"right"}}>
        <p className="market-cap">Market Cap: ${coin.market_cap.toLocaleString()}</p>
        </td>
    </tr>
    </Link>
  )
}

export default ListComponent
