import React from 'react';
import {motion} from 'framer-motion';
import { Link } from "react-router-dom";

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

const About = () => {
  return (
    <motion.div className='about-container'
      variants={containerVariants}
      initial = "hidden"
      animate = "show"
    >
      <h1>About</h1>
      <div className = "about-desc">
        <p>
          Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
        </p>

        <div>

        </div>
      </div>

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
        <Link to="/newslatter" className='link'> &#8659; </Link>
      </motion.h1>
    </motion.div>
  )
}

export default About