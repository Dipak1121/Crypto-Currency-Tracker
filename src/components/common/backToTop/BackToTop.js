import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./style.css"


const BackToTop = () => {

    const backBtn = document.getElementById("my-btn");
    
    window.onscroll = function(){
        scrollFunction();
    }

    function scrollFunction(){
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
            backBtn.style.display = "flex";
        }
        else{
            backBtn.style.display = "none";
        }
    }

    function goToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <div className='back-to-top' id='my-btn' onClick={goToTop}>
      <ArrowUpwardIcon style={{color:"var(--blue)"}}/>
    </div>
  )
}

export default BackToTop
