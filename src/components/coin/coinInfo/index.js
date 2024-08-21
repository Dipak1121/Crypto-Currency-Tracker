import React, { useState } from 'react'
import "./style.css"

const CoinInfo = ({heading, desc}) => {

    const [flag, setFlag] = useState(false);

    const shortDesc = desc.slice(0, 300) + '<span> Show More... </span>'
    const longDesc = desc + '<span> Show Less... </span>';

  return (
    <div className='desc-wrapper'>
      <h3 className='coin-info-heading'>{heading}</h3>
      <p 
      onClick={()=> setFlag(!flag)}
      className='coin-info-desc' dangerouslySetInnerHTML={{__html:flag ? longDesc : shortDesc}} />
    </div>
  )
}

export default CoinInfo
