import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '50vh'
  },
  show:{
    opacity: 1,
    y: '0',
    transition: {
      type: "spring", 
      stiffness: 80
    }
  }
}

const Newsletter = () => {
  return (
    <motion.div className='newslatter-container'
      variants={containerVariants}
      initial = 'hidden'
      animate = 'show'
    >
      <h1>¿Deseas recibir más información?</h1>
      <div>
        <button className='newsletter-button'>Si, deseo más información</button>
        <Link className='link' to="/">
          <button className='newsletter-button'>
            No, llevame al home
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Newsletter