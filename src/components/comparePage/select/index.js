import "./style.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { get100Coins } from "../../../functions/get100Coins";

const SelectCoins = ({crypto1, crypto2, handleCoinChange}) => {

    
    const [allCoins, setAllCoins] = useState([]);

    useEffect(()=>{
        getData();
    }, []);

    async function getData() {
        const myCoins = await get100Coins();
        // console.log("These are all coins>>>", myCoins);
        setAllCoins(myCoins);
    }
    
  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins.filter((item)=> item.id != crypto2).map((coin)=>{
            return(
                <MenuItem value={coin.id} key={coin.id}>{coin.name}</MenuItem>
            )
        })}
      </Select>

      <p>Crypto 2</p>
      <Select
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        value={crypto2}
        label="Crypto 2"
        onChange={(event)=>handleCoinChange(event, true)}
      >
        {allCoins.filter((item)=> item.id != crypto1).map((coin)=>{
            return(
                <MenuItem value={coin.id} key={coin.id}>{coin.name}</MenuItem>
            )
        })}
        
        
      </Select>
    </div>
  );
};

export default SelectCoins;
