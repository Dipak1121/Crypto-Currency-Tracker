import React from "react";
import "./style.css";
import Button from "../../common/button/Button";
import phone from "../../../assets/phone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { handleShare } from "../../../functions/shareLink";

const MainComponent = () => {

  const navigate = useNavigate();

  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1 
        className="track-crypto-heading"
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5}}
        >Track Crypto</motion.h1>
        <motion.h1 
        className="real-time-heading"
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5,delay:0.5}}
        >Real Time.
        </motion.h1>
        <motion.p 
        className="info-text"
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5,delay:0.75}}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div className="btn-flex"
        initial={{opacity:0, x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration: 0.5,delay:1.3}}
        >
          <Button text={"Dashboard"} onClick={()=>navigate("/dashboard")}/>
          <Button text={"Share"} onClick={handleShare} outlined={true} />
        </motion.div>
      </div>
      <div className="right-component">
        <motion.img src={phone} className="phone" 
        initial={{y:-10}}
        animate={{y:10}}
        transition={{
          type:"smooth",
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        />
        <motion.img src={gradient} className="gradient"
        initial={{y:-10}}
        animate={{y:10}}
        transition={{
          type:"smooth",
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror"
        }}
        />
      </div>
    </div>
  );
};

export default MainComponent;
