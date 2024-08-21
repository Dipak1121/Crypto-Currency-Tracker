
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import "./style.css"

export default function PaginationComponent({page, handleChange}) {


  return (
    <div className='pagination-comp'>
      <Pagination count={10} page={page} onChange={handleChange} 
      sx={{
        color: "var(--white) !important",
        "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important"
        },
        "& .MuiPaginationItem-ellipsis":{
            border: "0px solid var(--grey) !important"
        },
        "& .MuiPaginationItem-text":{
            color: "var(--white)",
            border: "1px solid var(--grey)"
        }
      }}/>
    </div>
  );
}
