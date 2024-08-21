
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import "./style.css"

export default function TotalPriceTypes({priceType, handlePriceTypeChange}) {
  

  return (
    <div className='toggle-comp'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .Mui-selected":{
            color: "var(--blue) !important",
            backgroundColor: "rgba(58,128,233,0.3)"
        },
        "& .MuiToggleButtonGroup-grouped":{
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--blue)"
        },
        "& .MuiToggleButton-standard":{
            color: "var(--blue)"
        }
      }}
    >
      <ToggleButton value="prices" className='toggle-btn'>Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn' >Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
