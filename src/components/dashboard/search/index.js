import React, { useState } from 'react'
import "./style.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = ({search, onChange}) => {

    


  return (
    <div className='search-flex'>
        <SearchIcon />
      <input placeholder='Search' type='text' onChange={(e)=> onChange(e)} value={search}/>
    </div>
  )
}

export default SearchComponent
