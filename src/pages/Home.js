import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
   return (
    <div className='home-container'>
      <motion.h1
        initial = {{y: "-10px"}}
        animate={{
          y:"0",
          transition : {
          ease: "easeIn",
          repeat : Infinity,
          repeatType : "reverse"
          }
        }}
        
      >
        <Link to="/about" className='link'> &#8659; </Link>
      </motion.h1>
    </div>
  )
}

export default Home